const validate = (userSchema) => async (req, res, next) => {
    let parseBody;
    try {
        const parseBody = await userSchema.parseAsync(req.body);
        req.body = parseBody;
        next();

    } catch (erro) {
        const status = 401;
        const message = "Fill the input Properly";
        const extraDetails = erro.errors[0].message;

        const error ={
            status,
            message,
            extraDetails,
        }
        console.log(error);        
        // res.status(400).json({msg: message});
        next(error);
    }
};

module.exports = validate;