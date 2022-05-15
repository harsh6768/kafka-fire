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




