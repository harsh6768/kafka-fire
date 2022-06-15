
const { Kafka }=require('kafkajs')

const producerFunc=async ()=>{
    const kafka=new Kafka({
        clientId : 'kafka-fire',
        brokers : ["localhost:9092"]
    })
    
    const producer = kafka.producer()
    
    console.log("Producer >>>",producer)
    
    await producer.connect()
    await producer.send({
      topic: 'kfk-fire',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })

}

producerFunc()

// await producer.disconnect()

// const Kafka=require('../services/kafka')
// const kafkaProducer=new Kafka().kafkaInstance;

// const publishMessage=async(req,res)=>{
//     // const KakfaProducer=new Kafka()
//     const { message }=req.body;
//     console.log("Msg",message);
//     const KakfaProducer=new Kafka()
//     await KakfaProducer.publish('kfk-fire',[message])
//     res.send("passed!")
    
// }


// const initProducer=async ()=>{
//     await kafkaProducer.initProducer()
// }

// module.exports ={
//     publishMessage,
//     // initProducer
// }