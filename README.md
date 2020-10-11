MITM
=====

# Amanda

## Ferret
To build ferret-sidejack in x64 environment, remember to have

```
$ apt install -y gcc-multilib g++-multilib
```

Then, run

```
$ cd amanda/ferret
$ mkdir -p bin tmp
$ make -j4
```

# Alice and Bob

By running

```
$ docker-compose up -d
```
Alice and Bob nodes will be built. In `bob/`, I placed some self-signed certificates with associated private key for completion.
(The certificate and private keys are on the VMWare which will not be used anywhere in reality.)
You can run [`gen_cert.sh`](https://github.com/ecsearch5/man-in-the-middle-ettercap-ferret-hamster/blob/main/bob/gen_cert.sh) to re-generate such certificates.

# Blog
Access to https://caineng.in/2020/10/06/session-hijacking-with-ettercap-hamster-ferret-and-wireshark/ for the original tutorial.
Unfortunately, it is not open currently. Check again to see when it is open!
