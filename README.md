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
