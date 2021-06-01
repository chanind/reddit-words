import { useLocation } from "react-router-dom";

/** Helper hook for parsing the query params from react-router */
const useQueryParams = () => new URLSearchParams(useLocation().search);

export default useQueryParams;
