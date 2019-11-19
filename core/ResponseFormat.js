const ResponseFormat = {
    build : (object, message, statusCode, statusType)  => {
        return {
            statusCode: statusCode,
            message: message,
            statusType: statusType,
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