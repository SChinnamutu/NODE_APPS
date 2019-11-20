const ResponseFormat = {
    build : (object, message, statusCode, statusType,token)  => {
        return {
            statusCode: statusCode,
            message: message,
            statusType: statusType,
            token: token,
            data: object,
        }
    },
    error : (object, message, statusCode, statusType) => {
        return {
            statusCode: statusCode,
            message: message,
            statusType: statusType,
            error: object,
        }
    }
}

module.exports = ResponseFormat