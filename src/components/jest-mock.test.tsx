// If the jest-mock-axios helper library to mock 
// Axios is working, this test will fail. To pass
// it rename __mocks__ as RENAMED__mocks__

import axios from "axios";
import { vi } from "vitest";

import { BASE_URL, fetchUsers } from '../utils/utils';

// Mock jest and set the type
//jest.mock("axios");
vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      mockedAxios.get.mockResolvedValueOnce(users);

      // when
      const result = await fetchUsers();

      // then
      expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    });
  });
});