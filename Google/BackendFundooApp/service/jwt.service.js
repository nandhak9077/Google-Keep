/******************************************************************************
 *  Execution       : default node          : cmd>  
 *  Purpose         : Generate tokens
 *  @description    
 * 
 *  @file           : jwt.services.js
 *  @overview       : generate token
 *  @author         : Nandhakumar<nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          :
 *
 ******************************************************************************/
//import the jsonwebtoken
const jwt=require('jsonwebtoken');
module.exports = {
    GenerateToken(payload)
    {
        const token =  jwt.sign({payload}, 'secretkey', { expiresIn:'1d' }) // expires in 2 hours
        const obj = {        
            success: true,
            message: 'Token Generated!!',
            token: token
        }
        return obj;
    }
}
