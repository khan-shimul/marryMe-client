import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProfiles = () => {
  const { isPending, data: allProfiles } = useQuery({
    queryKey: ["allProfiles"],
    queryFn: async () => {
      const res = await axios.get("/fakeDB.json");
      return res.data;
    },
  });
  return [isPending, allProfiles];
};

export default useProfiles;
