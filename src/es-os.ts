import os from "node:os"; // os => operating system

export const logHostName = () => {
    console.log(os.hostname());
}

export const logUserName = () => {
    const u = os.userInfo();
    console.log(u.username);
}

export const logUserHomeDir = () => {
    console.log(os.homedir());
}