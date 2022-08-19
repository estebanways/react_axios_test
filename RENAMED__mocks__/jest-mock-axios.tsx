//import mockAxios from "jest-mock-axios";
import mockAxios from "jest-mock-axios";

import { BASE_URL, fetchUsers } from "../src/utils/utils";

describe("fetchUsers", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      mockAxios.get.mockResolvedValueOnce(users);

      // when
      const result = await fetchUsers();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      mockAxios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});