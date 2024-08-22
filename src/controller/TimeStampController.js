import express from 'express';
import {promises as fs} from 'fs';

const getTime = async (req,res) => {
    try {
        let date = new Date();
        let dateTime = `Date ${date.toDateString()} Time ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getHours() >= 12 ? "PM" : "AM"}`;
        const today = new Date().getTime();
        const filePath = `src/DateTime/${dateTime}.txt`;
        const content = `${date.toLocaleString()}`;
        await fs.writeFile(filePath , content);
        let datas = await fs.readFile(filePath, "utf-8");
        res.send({message : "data Fecth successfully",Date_Time: datas})
    } catch (error) {
        res.send({
            message: "Internal server Error",
        });
    }
}

export default {getTime}