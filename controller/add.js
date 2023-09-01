const { createAddRequest, getAllAddRequest, updateAddRequest, deleteAddRequest } = require("../service/add")

const createAdd = async (req, res, next) => {
    try {
    const { db, body } = req
    const response = await createAddRequest({ db, ...body })
    res.status(201).json({ message: "Add post request created", data: response })
    } catch (error) {
    next(error)
    }
}

const getAllAdd = async (req, res, next) => {
    try {
    const { db } = req
    const transferRequests = await getAllAddRequest({ db })
    res.status(200).json({ data: transferRequests })
    } catch (error) {
    next(error)
    }
}

const getAddHistory = async (req, res, next) => {
    try {
    const { db, query } = req
    const transferRequests = await getAllAddRequest({ db, query })
    res.status(200).json({ data: transferRequests })
    } catch (error) {
    next(error)
    }
}

const updateAddStatus = async (req, res, next) => {
    try {
    const { db, params, body } = req
    await updateAddRequest({ db, id: params.id, ...body })
    res.status(200).json({ message: "Add request updated" })
    } catch (error) {
    next(error)
    }
}

const deleteAdd = async (req, res, next) => {
    try {
    const { db, params } = req
    await deleteAddRequest({ db, id: params.id })
    res.status(200).json({ message: "Add request deleted" })
    } catch (error) {
    next(error)
    }
}

module.exports = {createAdd, getAllAdd, updateAddStatus, deleteAdd, getAddHistory}
