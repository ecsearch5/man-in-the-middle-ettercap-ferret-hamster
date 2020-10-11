#!/usr/bin/env bash
openssl genrsa -out key.pem # generate private key pair (RSA)
openssl req -new -key key.pem -out csr.pem # certficate signing request
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem # embed the private key int CSR in X509 standard
rm csr.pem