


export const notFoundErrors = (req, res, next) => {
    // catch 404 and forward to error handler
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404).json({ status: false, 
        message: 'Requested route not found',
        requested_route: `${req.originalUrl}`
    });
    // next(createError(404));
}

export const handleAllErrors = (err, req, res, next) => {

  // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  let message = err.message || 'Something went wrong! Please contact admin'

  if (err.status === 401) {
    message = 'You are not authorized!'
  }

  res.status(err.status || 500).json({
    status: false,
    message,
    access_token: null,
    data: null
  })
}