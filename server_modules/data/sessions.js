import mysql from "../db/mysqlConnector.js"
import Session from "./Session.js"

const SESSION_TIMEOUT = 1000 * 20

/** @type {Map<String, Session>} */
const activeSessions = new Map();

/** 
 * @param {String} token 
 * @returns {Session | Error}
 */
function findSession(token){
    const session = activeSessions.get(token)
    if(!session) return Error("Session not exists")
    if(Date.now() - session.lastActivity >= SESSION_TIMEOUT){
        activeSessions.delete(token)
        return Error("Session expired")
    }
    return session
}