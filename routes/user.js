import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'
const router=express.Router();

// only admin can access this router

router.get('/admin',authMiddleware,(req,res)=>{
    res.json({message:"Welcome admin"})
})
// both admin and manager can access this router

router.get('/manager',authMiddleware,(req,res)=>{
    res.json({message:"Welcome manager"})
})
// all can access this router
router.get('/user',authMiddleware,(req,res)=>{
    res.json({message:"Welcome user"})
})

export default router;