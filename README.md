# Group 44

by [Andrei Simion-Constantinescu](https://github.com/simionAndrei),
[Mihai Voicescu](https://github.com/mihai1voicescu)



# Table of Contents

1.  [Introduction](#introduction)
2.  [Solution details](#solution-details)
  * [RDD](#rdd)
  * [RDDFast](#rddfast)
  * [DataSetWindow](#datasetwindow)
  * [DataSetWindow2](#datasetwindow2)
3.  [Initial tests](#initial-tests)
  * [Small 10 machines cluster](#small-10-machines-cluster)
  * [Medium 10 machines cluster](#medium-10-machines-cluster)
4.  [Running parameters configuration](#running-parameters-configuration)
  * [Number of executors and memory](#number-of-executors-and-memory)
  * [Kryo Serializer](#kyro-serializer)
  * [offHeap enabled](#offHeap-enabled)
5.  [Final tests](#final-tests)
  * [Running with default configurations](#running-with-default-configurations)
  * [Running with custom configurations](#running-with-custom-configurations)


# Introduction

![Test image](figures/web_conn.png)

***Figure 1*** - Web Interfaces used to monitor our application from AWS cluster: Ganglia (up), Spark History Server (left), Resource Manager (right)

# Solution details

## RDD

## RDDFast

## DataSetWindow

## DataSetWindow2

# Initial tests


## Small 10 machines cluster

| Running ID | Data interval | Input size | Shuffle size | Time     |
|------------|---------------|------------|--------------|----------|
| 1          | 10 days       | ~25GB      | ~340MB       | 119.72s  |
| 2          | 1 month       | ~74GB      | ~999MB       | 264.13s  |
| 3          | 1 year        | ~1.2TB     | ~16GB        | 3680.12s |

***Table 1*** - Running results on 10m4.large (4vCore, 8GB) AWS instances


## Medium 10 machines cluster

| Running ID | Data interval | Input size | Shuffle size | Time     |
|------------|---------------|------------|--------------|----------|
| 1          | 1 month       | ~74GB      | ~999MB<sup>1</sup>      | 156.78s  |
| 2          | 3 months      | ~214GB     | ~2.8GB<sup>2</sup>     | 417.66s  |
| 3          | 1 year        | ~1.2TB     | ~16GB        | 1815.83s |

***Table 2*** - Running results on 10m4.xlarge (8vCore, 16GB) AWS instances  
<sup>1</sup> 822.5MB when KryoSerializer enabled  
<sup>2</sup> 2.3GB when KryoSerializer enabled    




# Running parameters configuration

## Number of executors and memory

## Kryo Serializer

## offHeap enabled


# Final tests

## Running with default configurations

TODO Error out of memory


## Running with custom configurations

| Running ID | Description                                                                                                        | Time    |
|------------|--------------------------------------------------------------------------------------------------------------------|---------|
| 1          | **DataSetWindow** with 1 executor per node, 34 cores and 16GB memory per executor                                      | 403.11s |
| 2          | **RDD** with 1 executor per node, 34 cores and 16GB memory per executor                                                | 653.15s |
| 3          | **RDDFast** with 1 executor per node, 34 cores and 16GB memory per executor                                            | 472.95s |
| 4          | **DataSetWindow** 1 executor per node, 34 cores and 42GB memory per executor                                           | 455.26s |
| 5          | **RDDFast** with 5 executors per node, 7 cores and 5GB memory per executor                                             | 425.19s |
| 6          | **DataSetWindow2** with 1 executor per node, 34 cores and 16GB memory per executor                                     | 400.41s |
| 7          | **DatasetWindow2** with 1 executor per node, 34 cores and 8GB memory per executor, KryoSerializer and offHeap of 16GB  | 432.52s |
| 8          | **DatasetWindow2** with 1 executor per node, 34 cores and 16GB memory per executor, KryoSerializer and offHeap of 16GB | 385.09s |
