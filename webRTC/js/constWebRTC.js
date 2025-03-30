
const peerConnectionConfig = {
    "iceServers": [
        { "urls": "stun:hk-turn1.xirsys.com" },
        {
            "urls": [
                "turn:hk-turn1.xirsys.com:80?transport=udp",
                "turn:hk-turn1.xirsys.com:3478?transport=udp",
                "turn:hk-turn1.xirsys.com:80?transport=tcp",
                "turn:hk-turn1.xirsys.com:3478?transport=tcp",
                "turns:hk-turn1.xirsys.com:443?transport=tcp",
                "turns:hk-turn1.xirsys.com:5349?transport=tcp"
            ],
            "username": "z9TpC1KPfzniEVLyzf1PBsScx8n96fIyfwgQmxm1fnbh4ymIle2mBR1BNtjgCyxDAAAAAGfpGoZreW9seQ==",
            "credential": "5da90892-0d50-11f0-9795-0242ac120004",
        },
    ]
}
var domainLive = `${window.location.protocol}//${window.location.hostname}${(window.location.port ? ':' + window.location.port : ':7111')}`;
if (window.location.protocol === 'https:') domainLive = `${window.location.protocol}//${window.location.hostname}`;
//domainLive = `https://room.kyoly.online`;
