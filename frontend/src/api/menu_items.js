import client from "./client";

export const allMenuItems = () => client.get("/complexSearch?number=10&apiKey=cf25781960af46d3beba5d21ac99b74b");
