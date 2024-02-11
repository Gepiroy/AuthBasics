import express from 'express'

const router = express.Router()

router.mount = () => {
    router.ws('/start',  function(ws, req) {
        ws.on('message', function(msg) {
            ws.send("Started by message " + msg);
        });
    })
}



export default router;