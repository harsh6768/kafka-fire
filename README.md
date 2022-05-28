# kafka-fire

#### What is ZooKeeper?

ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. All of these kinds of services are used in some form or another by distributed applications. Each time they are implemented there is a lot of work that goes into fixing the bugs and race conditions that are inevitable. Because of the difficulty of implementing these kinds of services, applications initially usually skimp on them, which make them brittle in the presence of change and difficult to manage. Even when done correctly, different implementations of these services lead to management complexity when the applications are deployed.

Read more about [ZooKeeper](https://zookeeper.apache.org/)

<img src="https://github.com/harsh6768/kafka-fire/blob/zookeeper-doc/Zookeeper/zookeeper.png" width="750" height="550" />


Zookeeper provides multiple features for distributed applications:

> Distributed configuration management.
> Sele election / consensus building (like decided Leader in Kafka)
> Coordination and locks.
> Key value store


> ZooKeeper is used in many distributed systems , such as Hadoop , Kafka etc.

> It's  an Apache Project that's proven to be very statble and hasn't had major release in many years . 
> 3.4.x is the stable channel 
> 3.5.x has been in development for many years , and it is still in beta.

 **ZooKeeper internal data structure is like a tree **


- **Each node is called a zNode**
- **Each zNode has a path**
- **zNode can be persistend (node will always be alive even if disconnected by the server) or ephemeral (will be dead if server disconnected)**
- **Each zNode can store data**
- **Node renaming of zNode**
- **Each zNode can be Watched for changes.**


### Simple Explaination :   [Watch Youtube for more](https://www.youtube.com/watch?v=gZj16chk0Ss)
  It basically keeps track of information that must be synchronized across your cluster.
  
- Which node is the master ? 
- What tasks are assigned to which workers 
- Which workers are currently available ? 

- It's a tool that applications can use to recover from partial failures in your cluster .
- **An Integral part of HBase , High-Availability(HA) MapReduce, Drill, Storm, Solr and much more**


#### Failure Mode : 

- Master crashes , needs to fail over to a backup
- Worker crashes - its work needs to be redistributed 
- Network trouble - part of your cluster can't see the rest of it.


**Primitive** operations in a distributed System 

1.  **Master Election** : 
     - One node registers itselt as a master , and holds a **lock** on that data
     - Other nodes cannot become master until that lock is released
     - Only one node allowed to hold the lock at a time
     
2. **Crash Detection** : 
    -  **Ephemeral** data on a node's availability automatically goes away if the node disconnects ,or fails to refresh itself after some time-out period.
    
3. **Group Management**:
   - List of outstanding tasks , task assignments.


### ZooKeeper's API : 

1. Really a little distributed file system 
   - With strong consistency guarantees
   - Replace the concept of **"file"** with **"znode"** and you've pretty much got it
  
2. Here's the ZooKeeper API : 

   - Create ,delete , exists, setData, getData, getChilren

<img src="https://github.com/harsh6768/kafka-fire/blob/zookeeper-doc/Zookeeper/zookeeper-file-system.png" width="550" height="550" />


### Persistent and ephemeral znodes : 

1. Persistent znodes remain stored until explicitly deleted
  - i.e. , assignment of tasks of workers must persis event if master crashes 
 
2. Ephemeral znodes go away if the client that created it crashes or loses its connection to Zookeeper
  - i.e. , if the master crashes , it should releases its lock on the znode that indicates which node is the master
  
   
 ### ZooKeeper Quorums :
 
 It's basically the minimum number of server nodes that must be up and running and available for client requests. Any update done to the ZooKeeper tree by the clients must be persistently stored in this quorum of nodes for a transaction to be completed successfully.
 
 [Learn About ZooKeeper Quorums](https://medium.com/@akash.d.goel/zookeeper-quorum-7916e342faf6#:~:text=It's%20basically%20the%20minimum%20number,transaction%20to%20be%20completed%20successfully.)
 
 **Brain Split Problem** : 
 
 
 1. [Learn More About Brain Split](https://javamana.com/2020/12/20201210211354350p.html)
 2. [Learn More About Brain Split](https://blog.actorsfit.com/a?ID=01300-582eef31-3269-41b7-80ab-d4da36d4f73f)
 3. [Learn More About Brain Split](https://blog.fearcat.in/a?ID=01750-f16b0dc2-aef8-496c-b886-388f99395e38)
 
 
   
   

## Install Kafka and Zookeeper on Local Machine and Setup 


> Install Kafka (It will include Kafka and Zookeeper ,don't need to install Zookeeper seperately) 
  
 Go to  Kafka Website [Kafka and Zookeeper](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.2.0/kafka-3.2.0-src.tgz)
  
       
        tar -xvzf  kafka-3.2.0-src.tgz

>  Setup Kafka and Zookeeper 

- **configure ip of server in config/server.properties**

<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />

<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.08%20PM.png" />
https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.44%20PM.png





