const peerConnectionConfig = {
    "iceServers": [
        // { "urls": "stun:hk-turn1.xirsys.com" },
        // {
        //     "urls": [
        //         "turn:hk-turn1.xirsys.com:80?transport=udp",
        //         "turn:hk-turn1.xirsys.com:3478?transport=udp",
        //         "turn:hk-turn1.xirsys.com:80?transport=tcp",
        //         "turn:hk-turn1.xirsys.com:3478?transport=tcp",
        //         "turns:hk-turn1.xirsys.com:443?transport=tcp",
        //         "turns:hk-turn1.xirsys.com:5349?transport=tcp"
        //     ],
        //     "username": "6uAzOTFiPLpbQASUhGwRb90arFmWB0NpVN6YX_LnQ-RRk3dyMgMz_MRNn9JJXhsQAAAAAGfqYU5tZXNocm9vbQ==",
        //     "credential": "24501b26-0e13-11f0-a4b9-0242ac120004",
        // },
        //
        { "urls": "stun:freestun.net:3478" },
        {
            "urls": "turn:freestun.net:3478",
            "username": "free",
            "credential": "free"
        }
        //
        // {
        //     "urls": [
        //         "turn:turn.kyoly.online:3478?transport=udp",
        //         "turn:turn.kyoly.online:3478?transport=tcp",
        //         "turns:turn.kyoly.online:5349?transport=tcp",
        //     ],
        //     "username": "test",
        //     "credential": "test123",
        // },
    ]
}
var domainLive = `${window.location.protocol}//${window.location.hostname}${(window.location.port ? ':' + window.location.port : ':7111')}`;
if (window.location.protocol === 'https:') domainLive = `${window.location.protocol}//${window.location.hostname}`;
domainLive = `https://room.kyoly.online`;
