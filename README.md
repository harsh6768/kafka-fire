# kafka-fire

#### What is ZooKeeper?

ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. All of these kinds of services are used in some form or another by distributed applications. Each time they are implemented there is a lot of work that goes into fixing the bugs and race conditions that are inevitable. Because of the difficulty of implementing these kinds of services, applications initially usually skimp on them, which make them brittle in the presence of change and difficult to manage. Even when done correctly, different implementations of these services lead to management complexity when the applications are deployed.

Read more about [ZooKeeper](https://zookeeper.apache.org/)


Zookeeper provides multiple features for distributed applications:

> Distributed configuration management.
> Sele election / consensus building (like decided Leader in Kafka)
> Coordination and locks.
> Key value store


> ZooKeeper is used in many distributed systems , such as Hadoop , Kafka etc.

> It's  an Apache Project that's proven to be very statble and hasn't had major release in many years . 
> 3.4.x is the stable channel 
> 3.5.x has been in development for many years , and it is still in beta.


> ZooKeeper internal data structure is like a tree 


- Each node is called a zNode
- Each zNode has a path
- zNode can be persistend (node will always be alive even if disconnected by the server) or ephemeral (will be dead if server disconnected)
- Each zNode can store data
- Node renaming of zNode 
- Each zNode can be Watched for changes. 

<img src="https://github.com/harsh6768/kafka-fire/blob/zookeeper-doc/Zookeeper/zookeeper.png"/>


