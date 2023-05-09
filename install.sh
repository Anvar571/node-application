
# #!/bin/bash

prname=myterminal

# Add the project command to the system path
sudo ln -s $(pwd)/src/main.js /usr/local/bin/$prname;

chmod +x $(pwd)/src/main.js;

echo "MYTERMINAL is successfully installed!!!"
