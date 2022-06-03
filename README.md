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

> **In place of this**

        advertised.listeners=PLAINTEXT://your.host.name:9092 
         
  **add your ip address if doing setup on remote machine so that consumer can connect with Kafka to consume the messages form kafka or just put localhost if you are using it in local machine.** 
         
        advertised.listeners=PLAINTEXT://localhost:9092        // Im doing setup on local machine


<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.36.44%20PM.png" />

> **In place of this**
     
       zookeeper.connect=localhost:2181        
      
 leave it as it is if you are in local machine or put your ip address if your are in remote machine.
      
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%205.40.12%20PM.png" />

> **Run below command to start the zookeeper** 
        
       bin/zookeeper-server-start.sh config/zookeeper.properties
         
         
 - **It you are getting error while running this command like below mentioned**
   
        Classpath is empty.Please build the project first e.g. by running './gradlew jar -PscalaVersion=2.13.6'
      
  **then run the below command to resolve the issue**
  
      ./gradlew jar -PscalaVersion=2.13.6
            
        
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%206.07.28%20PM.png" />


> **You will see Build successful . now you can run the above command to run the zookeeper**


 
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%206.07.46%20PM.png" />


- **Now again run the below command to run the zookeeper in local machine and you will see server is running on port 2181(Zookeeper Default port)**
 
       bin/zookeeper-server-start.sh config/zookeeper.properties
       
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-27%20at%206.08.00%20PM.png" />


- **Run below command to run Kafka Server**

       JMX_PORT=8004 bin/kafka-server-start.sh config/server.properties
       
  JMX_PORT will be used later on by kafka manager
  
 
<img src="https://github.com/harsh6768/kafka-fire/blob/main/Zookeeper/Screenshot%202022-05-28%20at%203.12.39%20PM.png" />
  
  
       

### KAFKA MANAGER : 

Go to [CMAK website](https://github.com/yahoo/CMAK) to find cmak repository

There are different steps to install and setup kafka manager


- Clone cmak from [CMAK website](https://github.com/yahoo/CMAK) by using below command 


       git clone https://github.com/yahoo/CMAK.git
        
       
<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-01%20at%2010.48.05%20AM.png" />


- Go inside CMAK folder and run below command 

       ./sbt clean dist 
      
      
<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-01%20at%2010.50.48%20AM.png" />


- After running the above command if you are getting error something like  **Cannnot use JVMCI compiler : No JVMCI compiler found** and if you are on mac you can install the cbt using brew , **Run below command to install sbt**

        brew install sbt
        
        
<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-01%20at%2010.51.14%20AM.png" />

- **After installing the sbt , run the below command**

      sbt clean dist
      

<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-02%20at%2010.54.08%20AM.png" />

- **When sbt cleans up , it prepares your package in some path ,now you have to go to that path and unzip the package**

        
        [info] Your package is ready in /Users/harsh/Downloads/CMAK/target/universal/cmak-3.0.0.6.zip
     
     
<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-03%20at%2010.22.49%20AM.png" />




<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-03%20at%2011.07.38%20AM.png" />


<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-03%20at%203.18.08%20PM.png" />

<img src="https://github.com/harsh6768/kafka-fire/blob/main/kafka-manager/Screenshot%202022-06-03%20at%203.18.36%20PM.png" />



