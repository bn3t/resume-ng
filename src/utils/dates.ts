import dayjs from "dayjs";

export const formatDate = (date: string) => dayjs(date).format("MM/YYYY");
