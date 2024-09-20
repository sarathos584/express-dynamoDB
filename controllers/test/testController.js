import { validationResult } from "express-validator";
import HttpError from "../../utils/httpError.js";
import db from "../../config/database.js";
import { tableNames } from "../../config/dbTableNames.js";
import { v4 as uuidv4 } from 'uuid';

export const getAllUsers = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (! errors.isEmpty()) {
        return next(new HttpError("Invalid data inputs passed, Please check your data before retry!",422));
      } else {

        const params = {
          TableName: tableNames.users
        }
        
        const data = await db.scan(params).promise()
        
        res.status(200).json({ status: true, data: data.Items })
          
      }
    } catch (error) {
      return next(new HttpError("Oops! Process failed, please do contact admin", 500));
    }
};

export const addNewUser = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (! errors.isEmpty()) {
        return next(new HttpError("Invalid data inputs passed, Please check your data before retry!",422));
      } else {
       
        const { first_name, last_name, email } = req.body

        const params = {
          TableName: tableNames.users,
          Item: {
            user_id: uuidv4(),
            first_name,
            last_name,
            email
          }
        }

        
        const data = await db.put(params).promise()
        
        res.status(200).json({ status: true, message: "new user added" })
          
      }
    } catch (error) {
      return next(new HttpError("Oops! Process failed, please do contact admin", 500));
    }
};

export const getUserById = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (! errors.isEmpty()) {
        return next(new HttpError("Invalid data inputs passed, Please check your data before retry!",422));
      } else {
       
        const { user_id } = req.body


        const params = {
          TableName: tableNames.users,
          Key: {
              'user_id': user_id, 
          },
      };

        const data = await db.get(params).promise()
        res.status(200).json({ status: true, data: data.Item })          
      }
    } catch (error) {
      console.log(error)
      return next(new HttpError("Oops! Process failed, please do contact admin", 500));
    }
};


export const updateUser = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (! errors.isEmpty()) {
        return next(new HttpError("Invalid data inputs passed, Please check your data before retry!",422));
      } else {
       
        const { user_id, first_name, last_name, email } = req.body


        const params = {
          TableName: tableNames.users,
          Item: {
            user_id,
            first_name,
            last_name,
            email
          }
      };

        const data = await db.put(params).promise()
        res.status(200).json({ status: true, message: 'user updated' })          
      }
    } catch (error) {
      console.log(error)
      return next(new HttpError("Oops! Process failed, please do contact admin", 500));
    }
};

export const deleteUser = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (! errors.isEmpty()) {
        return next(new HttpError("Invalid data inputs passed, Please check your data before retry!",422));
      } else {
       
        const { user_id } = req.body


        const params = {
          TableName: tableNames.users,
          Key: { user_id }
      };

        const data = await db.delete(params).promise()
        res.status(200).json({ status: true, message: 'user removed' })          
      }
    } catch (error) {
      console.log(error)
      return next(new HttpError("Oops! Process failed, please do contact admin", 500));
    }
};