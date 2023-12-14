enum StatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
}

enum MessageStatus {
    OK = "SUCESSFUL_REQUEST",
    BAD_REQUEST = "ERROR_PARAMETERS_REQUEST",
    NOT_FOUND = "NOT_FOUND_RESOURCES",
}

export { StatusCode, MessageStatus };