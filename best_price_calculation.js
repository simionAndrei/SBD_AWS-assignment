'use strict';

/*
taken from https://aws.amazon.com/ec2/pricing/on-demand/ with copy paste
 */

const copyPaste = `a1.medium\t1\tN/A\t2 GiB\tEBS Only\t$0.0255 per Hour\na1.large\t2\tN/A\t4 GiB\tEBS Only\t$0.051 per Hour\na1.xlarge\t4\tN/A\t8 GiB\tEBS Only\t$0.102 per Hour\na1.2xlarge\t8\tN/A\t16 GiB\tEBS Only\t$0.204 per Hour\na1.4xlarge\t16\tN/A\t32 GiB\tEBS Only\t$0.408 per Hour\na1.metal\t16\tN/A\t32 GiB\tEBS Only\t$0.408 per Hour\nt3.nano\t2\tVariable\t0.5 GiB\tEBS Only\t$0.0052 per Hour\nt3.micro\t2\tVariable\t1 GiB\tEBS Only\t$0.0104 per Hour\nt3.small\t2\tVariable\t2 GiB\tEBS Only\t$0.0208 per Hour\nt3.medium\t2\tVariable\t4 GiB\tEBS Only\t$0.0416 per Hour\nt3.large\t2\tVariable\t8 GiB\tEBS Only\t$0.0832 per Hour\nt3.xlarge\t4\tVariable\t16 GiB\tEBS Only\t$0.1664 per Hour\nt3.2xlarge\t8\tVariable\t32 GiB\tEBS Only\t$0.3328 per Hour\nt3a.nano\t2\tVariable\t0.5 GiB\tEBS Only\t$0.0047 per Hour\nt3a.micro\t2\tVariable\t1 GiB\tEBS Only\t$0.0094 per Hour\nt3a.small\t2\tVariable\t2 GiB\tEBS Only\t$0.0188 per Hour\nt3a.medium\t2\tVariable\t4 GiB\tEBS Only\t$0.0376 per Hour\nt3a.large\t2\tVariable\t8 GiB\tEBS Only\t$0.0752 per Hour\nt3a.xlarge\t4\tVariable\t16 GiB\tEBS Only\t$0.1504 per Hour\nt3a.2xlarge\t8\tVariable\t32 GiB\tEBS Only\t$0.3008 per Hour\nt2.nano\t1\tVariable\t0.5 GiB\tEBS Only\t$0.0058 per Hour\nt2.micro\t1\tVariable\t1 GiB\tEBS Only\t$0.0116 per Hour\nt2.small\t1\tVariable\t2 GiB\tEBS Only\t$0.023 per Hour\nt2.medium\t2\tVariable\t4 GiB\tEBS Only\t$0.0464 per Hour\nt2.large\t2\tVariable\t8 GiB\tEBS Only\t$0.0928 per Hour\nt2.xlarge\t4\tVariable\t16 GiB\tEBS Only\t$0.1856 per Hour\nt2.2xlarge\t8\tVariable\t32 GiB\tEBS Only\t$0.3712 per Hour\nm5.large\t2\t8\t8 GiB\tEBS Only\t$0.096 per Hour\nm5.xlarge\t4\t16\t16 GiB\tEBS Only\t$0.192 per Hour\nm5.2xlarge\t8\t31\t32 GiB\tEBS Only\t$0.384 per Hour\nm5.4xlarge\t16\t60\t64 GiB\tEBS Only\t$0.768 per Hour\nm5.8xlarge\t32\t131\t128 GiB\tEBS Only\t$1.536 per Hour\nm5.12xlarge\t48\t173\t192 GiB\tEBS Only\t$2.304 per Hour\nm5.16xlarge\t64\t262\t256 GiB\tEBS Only\t$3.072 per Hour\nm5.24xlarge\t96\t345\t384 GiB\tEBS Only\t$4.608 per Hour\nm5.metal\t96\t345\t384 GiB\tEBS Only\t$4.608 per Hour\nm5a.large\t2\tN/A\t8 GiB\tEBS Only\t$0.086 per Hour\nm5a.xlarge\t4\tN/A\t16 GiB\tEBS Only\t$0.172 per Hour\nm5a.2xlarge\t8\tN/A\t32 GiB\tEBS Only\t$0.344 per Hour\nm5a.4xlarge\t16\tN/A\t64 GiB\tEBS Only\t$0.688 per Hour\nm5a.8xlarge\t32\tN/A\t128 GiB\tEBS Only\t$1.376 per Hour\nm5a.12xlarge\t48\tN/A\t192 GiB\tEBS Only\t$2.064 per Hour\nm5a.16xlarge\t64\tN/A\t256 GiB\tEBS Only\t$2.752 per Hour\nm5a.24xlarge\t96\tN/A\t384 GiB\tEBS Only\t$4.128 per Hour\nm5ad.large\t2\tN/A\t8 GiB\t1 x 75 NVMe SSD\t$0.103 per Hour\nm5ad.xlarge\t4\tN/A\t16 GiB\t1 x 150 NVMe SSD\t$0.206 per Hour\nm5ad.2xlarge\t8\tN/A\t32 GiB\t1 x 300 NVMe SSD\t$0.412 per Hour\nm5ad.4xlarge\t16\tN/A\t64 GiB\t2 x 300 NVMe SSD\t$0.824 per Hour\nm5ad.12xlarge\t48\tN/A\t192 GiB\t2 x 900 NVMe SSD\t$2.472 per Hour\nm5ad.24xlarge\t96\tN/A\t384 GiB\t4 x 900 NVMe SSD\t$4.944 per Hour\nm5d.large\t2\t8\t8 GiB\t1 x 75 NVMe SSD\t$0.113 per Hour\nm5d.xlarge\t4\t16\t16 GiB\t1 x 150 NVMe SSD\t$0.226 per Hour\nm5d.2xlarge\t8\t31\t32 GiB\t1 x 300 NVMe SSD\t$0.452 per Hour\nm5d.4xlarge\t16\t60\t64 GiB\t2 x 300 NVMe SSD\t$0.904 per Hour\nm5d.8xlarge\t32\t131\t128 GiB\t2 x 600 NVMe SSD\t$1.808 per Hour\nm5d.12xlarge\t48\t173\t192 GiB\t2 x 900 NVMe SSD\t$2.712 per Hour\nm5d.16xlarge\t64\t262\t256 GiB\t4 x 600 NVMe SSD\t$3.616 per Hour\nm5d.24xlarge\t96\t345\t384 GiB\t4 x 900 NVMe SSD\t$5.424 per Hour\nm5d.metal\t96\t345\t384 GiB\t4 x 900 NVMe SSD\t$5.424 per Hour\nm5dn.large\t2\tN/A\t8 GiB\t1 x 75 NVMe SSD\t$0.136 per Hour\nm5dn.xlarge\t4\tN/A\t16 GiB\t1 x 150 NVMe SSD\t$0.272 per Hour\nm5dn.2xlarge\t8\tN/A\t32 GiB\t1 x 300 NVMe SSD\t$0.544 per Hour\nm5dn.4xlarge\t16\tN/A\t64 GiB\t2 x 300 NVMe SSD\t$1.088 per Hour\nm5dn.8xlarge\t32\tN/A\t128 GiB\t2 x 600 NVMe SSD\t$2.176 per Hour\nm5dn.12xlarge\t48\tN/A\t192 GiB\t2 x 900 GB NVMe SSD\t$3.264 per Hour\nm5dn.16xlarge\t64\tN/A\t256 GiB\t4 x 600 NVMe SSD\t$4.352 per Hour\nm5dn.24xlarge\t96\tN/A\t384 GiB\t4 x 900 NVMe SSD\t$6.528 per Hour\nm5n.large\t2\tN/A\t8 GiB\tN/A\t$0.119 per Hour\nm5n.xlarge\t4\tN/A\t16 GiB\tN/A\t$0.238 per Hour\nm5n.2xlarge\t8\tN/A\t32 GiB\tN/A\t$0.476 per Hour\nm5n.4xlarge\t16\tN/A\t64 GiB\tN/A\t$0.952 per Hour\nm5n.8xlarge\t32\tN/A\t128 GiB\tN/A\t$1.904 per Hour\nm5n.12xlarge\t48\tN/A\t192 GiB\tN/A\t$2.856 per Hour\nm5n.16xlarge\t64\tN/A\t256 GiB\tN/A\t$3.808 per Hour\nm5n.24xlarge\t96\tN/A\t384 GiB\tN/A\t$5.712 per Hour\nm4.large\t2\t6.5\t8 GiB\tEBS Only\t$0.10 per Hour\nm4.xlarge\t4\t13\t16 GiB\tEBS Only\t$0.20 per Hour\nm4.2xlarge\t8\t26\t32 GiB\tEBS Only\t$0.40 per Hour\nm4.4xlarge\t16\t53.5\t64 GiB\tEBS Only\t$0.80 per Hour\nm4.10xlarge\t40\t124.5\t160 GiB\tEBS Only\t$2.00 per Hour\nm4.16xlarge\t64\t188\t256 GiB\tEBS Only\t$3.20 per Hour\nc5.large\t2\t9\t4 GiB\tEBS Only\t$0.085 per Hour\nc5.xlarge\t4\t17\t8 GiB\tEBS Only\t$0.17 per Hour\nc5.2xlarge\t8\t34\t16 GiB\tEBS Only\t$0.34 per Hour\nc5.4xlarge\t16\t68\t32 GiB\tEBS Only\t$0.68 per Hour\nc5.9xlarge\t36\t141\t72 GiB\tEBS Only\t$1.53 per Hour\nc5.12xlarge\t48\t188\t96 GiB\tEBS Only\t$2.04 per Hour\nc5.18xlarge\t72\t281\t144 GiB\tEBS Only\t$3.06 per Hour\nc5.24xlarge\t96\t375\t192 GiB\tEBS Only\t$4.08 per Hour\nc5.metal\t96\t375\t192 GiB\tEBS Only\t$4.08 per Hour\nc5d.large\t2\t9\t4 GiB\t1 x 50 NVMe SSD\t$0.096 per Hour\nc5d.xlarge\t4\t17\t8 GiB\t1 x 100 NVMe SSD\t$0.192 per Hour\nc5d.2xlarge\t8\t34\t16 GiB\t1 x 200 NVMe SSD\t$0.384 per Hour\nc5d.4xlarge\t16\t68\t32 GiB\t1 x 400 NVMe SSD\t$0.768 per Hour\nc5d.9xlarge\t36\t141\t72 GiB\t1 x 900 NVMe SSD\t$1.728 per Hour\nc5d.18xlarge\t72\t281\t144 GiB\t2 x 900 NVMe SSD\t$3.456 per Hour\nc5n.large\t2\tN/A\t5.25 GiB\tEBS Only\t$0.108 per Hour\nc5n.xlarge\t4\tN/A\t10.5 GiB\tEBS Only\t$0.216 per Hour\nc5n.2xlarge\t8\tN/A\t21 GiB\tEBS Only\t$0.432 per Hour\nc5n.4xlarge\t16\tN/A\t42 GiB\tEBS Only\t$0.864 per Hour\nc5n.9xlarge\t36\tN/A\t96 GiB\tEBS Only\t$1.944 per Hour\nc5n.18xlarge\t72\tN/A\t192 GiB\tEBS Only\t$3.888 per Hour\nc5n.metal\t72\tN/A\t192 GiB\tEBS Only\t$3.888 per Hour\nc4.large\t2\t8\t3.75 GiB\tEBS Only\t$0.10 per Hour\nc4.xlarge\t4\t16\t7.5 GiB\tEBS Only\t$0.199 per Hour\nc4.2xlarge\t8\t31\t15 GiB\tEBS Only\t$0.398 per Hour\nc4.4xlarge\t16\t62\t30 GiB\tEBS Only\t$0.796 per Hour\nc4.8xlarge\t36\t132\t60 GiB\tEBS Only\t$1.591 per Hour\np3.2xlarge\t8\t26\t61 GiB\tEBS Only\t$3.06 per Hour\np3.8xlarge\t32\t94\t244 GiB\tEBS Only\t$12.24 per Hour\np3.16xlarge\t64\t188\t488 GiB\tEBS Only\t$24.48 per Hour\np2.xlarge\t4\t12\t61 GiB\tEBS Only\t$0.90 per Hour\np2.8xlarge\t32\t94\t488 GiB\tEBS Only\t$7.20 per Hour\np2.16xlarge\t64\t188\t768 GiB\tEBS Only\t$14.40 per Hour\ng4dn.xlarge\t4\tN/A\t16 GiB\t125 GB NVMe SSD\t$0.526 per Hour\ng4dn.2xlarge\t8\tN/A\t32 GiB\t225 GB NVMe SSD\t$0.752 per Hour\ng4dn.4xlarge\t16\tN/A\t64 GiB\t225 GB NVMe SSD\t$1.204 per Hour\ng4dn.8xlarge\t32\tN/A\t128 GiB\t900 GB NVMe SSD\t$2.176 per Hour\ng4dn.12xlarge\t48\tN/A\t192 GiB\t900 GB NVMe SSD\t$3.912 per Hour\ng4dn.16xlarge\t64\tN/A\t256 GiB\t900 GB NVMe SSD\t$4.352 per Hour\ng3.4xlarge\t16\t47\t122 GiB\tEBS Only\t$1.14 per Hour\ng3.8xlarge\t32\t94\t244 GiB\tEBS Only\t$2.28 per Hour\ng3.16xlarge\t64\t188\t488 GiB\tEBS Only\t$4.56 per Hour\ng3s.xlarge\t4\t13\t30.5 GiB\tEBS Only\t$0.75 per Hour\nx1.16xlarge\t64\t174.5\t976 GiB\t1 x 1920 SSD\t$6.669 per Hour\nx1.32xlarge\t128\t349\t1,952 GiB\t2 x 1920 SSD\t$13.338 per Hour\nx1e.xlarge\t4\t12\t122 GiB\t1 x 120 SSD\t$0.834 per Hour\nx1e.2xlarge\t8\t23\t244 GiB\t1 x 240 SSD\t$1.668 per Hour\nx1e.4xlarge\t16\t47\t488 GiB\t1 x 480 SSD\t$3.336 per Hour\nx1e.8xlarge\t32\t91\t976 GiB\t1 x 960 SSD\t$6.672 per Hour\nx1e.16xlarge\t64\t179\t1,952 GiB\t1 x 1920 SSD\t$13.344 per Hour\nx1e.32xlarge\t128\t340\t3,904 GiB\t2 x 1,920 SSD\t$26.688 per Hour\nr5.large\t2\t9\t16 GiB\tEBS Only\t$0.126 per Hour\nr5.xlarge\t4\t19\t32 GiB\tEBS Only\t$0.252 per Hour\nr5.2xlarge\t8\t38\t64 GiB\tEBS Only\t$0.504 per Hour\nr5.4xlarge\t16\t71\t128 GiB\tEBS Only\t$1.008 per Hour\nr5.8xlarge\t32\t131\t256 GiB\tEBS Only\t$2.016 per Hour\nr5.12xlarge\t48\t173\t384 GiB\tEBS Only\t$3.024 per Hour\nr5.16xlarge\t64\t262\t512 GiB\tEBS Only\t$4.032 per Hour\nr5.24xlarge\t96\t347\t768 GiB\tEBS Only\t$6.048 per Hour\nr5.metal\t96\t347\t768 GiB\tEBS Only\t$6.048 per Hour\nr5a.large\t2\tN/A\t16 GiB\tEBS Only\t$0.113 per Hour\nr5a.xlarge\t4\tN/A\t32 GiB\tEBS Only\t$0.226 per Hour\nr5a.2xlarge\t8\tN/A\t64 GiB\tEBS Only\t$0.452 per Hour\nr5a.4xlarge\t16\tN/A\t128 GiB\tEBS Only\t$0.904 per Hour\nr5a.8xlarge\t32\tN/A\t256 GiB\tEBS Only\t$1.808 per Hour\nr5a.12xlarge\t48\tN/A\t384 GiB\tEBS Only\t$2.712 per Hour\nr5a.16xlarge\t64\tN/A\t512 GiB\tEBS Only\t$3.616 per Hour\nr5a.24xlarge\t96\tN/A\t768 GiB\tEBS Only\t$5.424 per Hour\nr5ad.large\t2\tN/A\t16 GiB\t1 x 75 NVMe SSD\t$0.131 per Hour\nr5ad.xlarge\t4\tN/A\t32 GiB\t1 x 150 NVMe SSD\t$0.262 per Hour\nr5ad.2xlarge\t8\tN/A\t64 GiB\t1 x 300 NVMe SSD\t$0.524 per Hour\nr5ad.4xlarge\t16\tN/A\t128 GiB\t2 x 300 NVMe SSD\t$1.048 per Hour\nr5ad.12xlarge\t48\tN/A\t384 GiB\t2 x 900 NVMe SSD\t$3.144 per Hour\nr5ad.24xlarge\t96\tN/A\t768 GiB\t4 x 900 NVMe SSD\t$6.288 per Hour\nr5d.large\t2\t10\t16 GiB\t1 x 75 NVMe SSD\t$0.144 per Hour\nr5d.xlarge\t4\t19\t32 GiB\t1 x 150 NVMe SSD\t$0.288 per Hour\nr5d.2xlarge\t8\t38\t64 GiB\t1 x 300 NVMe SSD\t$0.576 per Hour\nr5d.4xlarge\t16\t71\t128 GiB\t2 x 300 NVMe SSD\t$1.152 per Hour\nr5d.8xlarge\t32\t131\t256 GiB\t2 x 600 NVMe SSD\t$2.304 per Hour\nr5d.12xlarge\t48\t173\t384 GiB\t2 x 900 NVMe SSD\t$3.456 per Hour\nr5d.16xlarge\t64\t262\t512 GiB\t4 x 600 NVMe SSD\t$4.608 per Hour\nr5d.24xlarge\t96\t347\t768 GiB\t4 x 900 NVMe SSD\t$6.912 per Hour\nr5d.metal\t96\t347\t768 GiB\t4 x 900 NVMe SSD\t$6.912 per Hour\nr5dn.large\t2\tN/A\t16 GiB\t1 x 75 NVMe SSD\t$0.167 per Hour\nr5dn.xlarge\t4\tN/A\t32 GiB\t1 x 150 NVMe SSD\t$0.334 per Hour\nr5dn.2xlarge\t8\tN/A\t64 GiB\t1 x 300 NVMe SSD\t$0.668 per Hour\nr5dn.4xlarge\t16\tN/A\t128 GiB\t2 x 300 NVMe SSD\t$1.336 per Hour\nr5dn.8xlarge\t32\tN/A\t256 GiB\t2 x 600 NVMe SSD\t$2.672 per Hour\nr5dn.12xlarge\t48\tN/A\t384 GiB\t2 x 900 GB NVMe SSD\t$4.008 per Hour\nr5dn.16xlarge\t64\tN/A\t512 GiB\t4 x 600 NVMe SSD\t$5.344 per Hour\nr5dn.24xlarge\t96\tN/A\t768 GiB\t4 x 900 NVMe SSD\t$8.016 per Hour\nr5n.large\t2\tN/A\t16 GiB\tN/A\t$0.149 per Hour\nr5n.xlarge\t4\tN/A\t32 GiB\tN/A\t$0.298 per Hour\nr5n.2xlarge\t8\tN/A\t64 GiB\tN/A\t$0.596 per Hour\nr5n.4xlarge\t16\tN/A\t128 GiB\tN/A\t$1.192 per Hour\nr5n.8xlarge\t32\tN/A\t256 GiB\tN/A\t$2.384 per Hour\nr5n.12xlarge\t48\tN/A\t384 GiB\tN/A\t$3.576 per Hour\nr5n.16xlarge\t64\tN/A\t512 GiB\tN/A\t$4.768 per Hour\nr5n.24xlarge\t96\tN/A\t768 GiB\tN/A\t$7.152 per Hour\nr4.large\t2\t7\t15.25 GiB\tEBS Only\t$0.133 per Hour\nr4.xlarge\t4\t13.5\t30.5 GiB\tEBS Only\t$0.266 per Hour\nr4.2xlarge\t8\t27\t61 GiB\tEBS Only\t$0.532 per Hour\nr4.4xlarge\t16\t53\t122 GiB\tEBS Only\t$1.064 per Hour\nr4.8xlarge\t32\t99\t244 GiB\tEBS Only\t$2.128 per Hour\nr4.16xlarge\t64\t195\t488 GiB\tEBS Only\t$4.256 per Hour\ni3.large\t2\t7\t15.25 GiB\t1 x 475 NVMe SSD\t$0.156 per Hour\ni3.xlarge\t4\t13\t30.5 GiB\t1 x 950 NVMe SSD\t$0.312 per Hour\ni3.2xlarge\t8\t27\t61 GiB\t1 x 1900 NVMe SSD\t$0.624 per Hour\ni3.4xlarge\t16\t53\t122 GiB\t2 x 1900 NVMe SSD\t$1.248 per Hour\ni3.8xlarge\t32\t99\t244 GiB\t4 x 1900 NVMe SSD\t$2.496 per Hour\ni3.16xlarge\t64\t200\t488 GiB\t8 x 1900 NVMe SSD\t$4.992 per Hour\ni3.metal\t72\t208\t512 GiB\t8 x 1900 NVMe SSD\t$4.992 per Hour\ni3en.large\t2\tN/A\t16 GiB\t1 x 1250 NVMe SSD\t$0.226 per Hour\ni3en.xlarge\t4\tN/A\t32 GiB\t1 x 2500 NVMe SSD\t$0.452 per Hour\ni3en.2xlarge\t8\tN/A\t64 GiB\t2 x 2500 NVMe SSD\t$0.904 per Hour\ni3en.3xlarge\t12\tN/A\t96 GiB\t1 x 7500 NVMe SSD\t$1.356 per Hour\ni3en.6xlarge\t24\tN/A\t192 GiB\t2 x 7500 NVMe SSD\t$2.712 per Hour\ni3en.12xlarge\t48\tN/A\t384 GiB\t4 x 7500 NVMe SSD\t$5.424 per Hour\ni3en.24xlarge\t96\tN/A\t768 GiB\t8 x 7500 NVMe SSD\t$10.848 per Hour\ni3en.metal\t96\tN/A\t768 GiB\t8 x 7500 NVMe SSD\t$10.848 per Hour\nh1.2xlarge\t8\t26\t32 GiB\t1 x 2000 HDD\t$0.468 per Hour\nh1.4xlarge\t16\t53.5\t64 GiB\t2 x 2000 HDD\t$0.936 per Hour\nh1.8xlarge\t32\t99\t128 GiB\t4 x 2000 HDD\t$1.872 per Hour\nh1.16xlarge\t64\t188\t256 GiB\t8 x 2000 HDD\t$3.744 per Hour\nd2.xlarge\t4\t14\t30.5 GiB\t3 x 2000 HDD\t$0.69 per Hour\nd2.2xlarge\t8\t28\t61 GiB\t6 x 2000 HDD\t$1.38 per Hour\nd2.4xlarge\t16\t56\t122 GiB\t12 x 2000 HDD\t$2.76 per Hour\nd2.8xlarge\t36\t116\t244 GiB\t24 x 2000 HDD\t$5.52 per Hour`;

const input = copyPaste.split("\n").map(e => e.split("\t"))
    .map(e => [e[0], e[1], e[5], e[3]]);

const name = 0, cpu = 1, cost = 2, memory = 3;
input.forEach(e => e[cost] = +/\d+(:?\.\d+)?/.exec(e[cost])[0]);
input.forEach(e => e[memory] = +/\d+(:?\.\d+)?/.exec(e[memory])[0]);

// 1 core goes to yarn
input.forEach(e => e[cpu]--);

// they need to have at least 5 cores to make HDFS throughput viable
const yarnCapable = input.filter(e => e[cpu] > 4);

// from our tests we need at least 8GB for each 5 core
const memmoryOK = yarnCapable.filter(e => (e[memory] / e[cpu]) > (8 / 5 * 0.9));

// calculate cost per CPU
const costPerCpu = 4;
const withCost = memmoryOK.map(e => {
    let ne = Array(...e);
    ne.push(e[cost] / e[cpu]);

    return ne;
});

function costPreNGroup(n) {
    // calculate cost per group of 5
    const costPerCpuGroup = 5;
    const withCostN = withCost.map(e => {
        let ne = Array(...e);
        let groups = Math.floor(e[cpu] / n);
        ne.push(e[cost] / groups);

        return ne;
    });

    withCostN.sort((a, b) => a[costPerCpuGroup] - b[costPerCpuGroup]);


    console.log(`Results per ${n} core group`);
    // console.log(require('util').inspect(withCostN, {depth: null, colors: true}));


    console.log("Top 10");
    console.log(require('util').inspect(withCostN.slice(0, 11), {depth: null, colors: true}));

    console.log("c4.8xlarge Rank: " + (withCostN.findIndex(e => e[name] === "c4.8xlarge") + 1));

    console.log(withCostN.slice(0, 11).map(e => "" + e[0]).join("\n"));
}

// sort by it
withCost.sort((a, b) => a[costPerCpu] - b[costPerCpu]);

console.log("Results per core");
console.log(require('util').inspect(withCost, {depth: null, colors: true}));


console.log("Top 10");
console.log(require('util').inspect(withCost.slice(0, 11), {depth: null, colors: true}));

console.log("c4.8xlarge Rank: " + (withCost.findIndex(e => e[name] === "c4.8xlarge") + 1));

costPreNGroup(5);
costPreNGroup(7);
