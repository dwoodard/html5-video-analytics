# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "base"
    config.vm.hostname = "hva"
    config.vm.network "private_network", ip: "33.33.33.10"
    config.vm.network :forwarded_port, guest: 80, host: 8080
    config.vm.network :forwarded_port, guest: 443, host: 8443
    config.vm.network :forwarded_port, guest: 3306, host: 53306
	config.vm.box_url = "http://files.vagrantup.com/precise64.box"

	config.vm.provider :virtualbox do |vb|
	  vb.customize ["modifyvm", :id, "--memory", "4096"]
	end
	config.vm.provision :shell, :path => "install.sh"
end