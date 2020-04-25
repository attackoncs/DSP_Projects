update_image() {
cd $1; docker build -t $2 .
cd ..
}

pull_image() {
  # If doesn't exists pull
 if [ -z "$(docker images | grep -w "$1")" ]; then
  echo "Pulling $1..."
  docker pull $1
  fi
}
# Built images
# update_image dockersecplayground_alpine dockersecplayground/alpine:latest
# update_image dockersecplayground_alpine_ftp dockersecplayground/alpine_ftp:latest
# update_image dockersecplayground_alpine_compiler dockersecplayground/alpine_compiler:latest
# update_image dockersecplayground_alpine_networking dockersecplayground/alpine_networking:latest
# update_image dockersecplayground_alpine_bot dockersecplayground/alpine_bot:latest
# update_image dockersecplayground_alpine_router dockersecplayground/alpine_router:latest
# update_image dockersecplayground_alpine_telnet dockersecplayground/alpine_telnet:latest
# update_image dockersecplayground_alpine_test dockersecplayground/alpine_test:latest
# update_image dockersecplayground_ssh_keys dockersecplayground/ssh_keys:latest
# update_image dockersecplayground_alpine_ssh_password dockersecplayground/alpine_ssh_password:latest
update_image dockersecplayground_linode_lamp dockersecplayground/linode_lamp:v2.0
# update_image dockersecplayground_ubuntu32 dockersecplayground/ubuntu32
# update_image dockersecplayground_kali dockersecplayground/kali

# Update entrypoint image
# Remote Images NO LATEST TO LET THE pull_image function to properly work
# pull_image vimagick/webgoat:latest
#pull_image bkimminich/juice-shop:latest
