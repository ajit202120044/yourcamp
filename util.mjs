const getToken = (user) => {
    return jwt.sign({
      _id: user._id,
      firstname: user.firstname,
      email: user.email,
    }, process.env.JWT_SIGNIN_KEY,{
        expiresIn: '48h'
    });
  };
  
  export {getToken};