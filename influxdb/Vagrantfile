# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network "forwarded_port", :guest => 8083, :host => 8083
  config.vm.network "forwarded_port", :guest => 8086, :host => 8086
  config.vm.network "forwarded_port", :guest => 8090, :host => 8090
  config.vm.network "forwarded_port", :guest => 8099, :host => 8099

  config.ssh.forward_agent = true

  config.vm.provision "shell", inline: "apt-get -y install -qq"
  config.vm.provision "shell", inline: "wget -q http://s3.amazonaws.com/influxdb/influxdb_latest_amd64.deb && dpkg -i influxdb_latest_amd64.deb"
  config.vm.provision "shell", inline: "service influxdb start"
end
