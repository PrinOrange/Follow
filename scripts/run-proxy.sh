#!/bin/bash

PROXY_HOST="127.0.0.1"
PROXY_PORT="8080"

enable_proxy() {
  echo "Enabling proxy on $PROXY_HOST:$PROXY_PORT..."
  networksetup -listallnetworkservices | grep -v '^*' | while IFS= read -r svc; do
    sudo networksetup -setwebproxy "$svc" "$PROXY_HOST" "$PROXY_PORT"
    sudo networksetup -setsecurewebproxy "$svc" "$PROXY_HOST" "$PROXY_PORT"
    sudo networksetup -setwebproxystate "$svc" on
    sudo networksetup -setsecurewebproxystate "$svc" on
  done
  echo "Proxy enabled."
}

disable_proxy() {
  echo "Disabling proxy..."
  networksetup -listallnetworkservices | grep -v '^*' | while IFS= read -r svc; do
    sudo networksetup -setwebproxystate "$svc" off
    sudo networksetup -setsecurewebproxystate "$svc" off
  done
  echo "Proxy disabled."
}

cleanup() {
  echo "Exiting..."
  disable_proxy
  exit 0
}

trap cleanup SIGINT SIGTERM

enable_proxy

echo "Starting mitmproxy..."
mitmproxy -s scripts/mitproxy.py --ssl-insecure

cleanup