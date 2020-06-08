---
title: "Running Minecraft On Linux"
date: 2020-06-08T15:42:02+05:00
draft: true
layout: post
comments: true
categories: 
- Linux 
- Gaming
---

I have heard about Minecraft before and never paid much attention to it until my wife told me to try it out and see if our kid take any interest in that. I took this mission and invest bit of time, if I recall correctly it took me 4 days to get the result i wanted with mods. I had to do mods to get Elephants available my Kid loves them. I am running Linux distribution called OpenSuse Tumbleweed edition. 


After looking at some Youtube videos how to install it on Linux I found one video that install Minecraft on Linux mint using java and jar method. I tried that on my Linux system and able to run game using [skaia launcher](https://www.skaia.website/). This install include Minecraft version which was not that old and depends on JAVA11. 

Skaia launcher supports creating profile that allows you to use different version of java and minecraft client. So I configure profile to use java8 and minecraft client with forge support. Also set game version to 1.12. Once game launch I quit and follow the instructions to load different animal packs.

* Run minecraft 1.12.2 once using the launcher, then close
* Run the forge installer: https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.12.2-14.23.4.2705/forge-1.12.2-14.23.4.2705-installer.jar
* Navigate to the .minecraft folder and create a mods folder (how to get to the .minecraft folder: https://floaternet.com/appdata-linux)
* Download http://www.mediafire.com/file/rcu6qcffrtzg554/DrZharks_MoCreatures_Mod-12.0.5.jar/file and http://www.mediafire.com/file/48n1ixz8i2belv2/CustomMobSpawner-3.11.4.jar and put them inside the mods folder
* Run minecraft 1.12.2-forge using the launcher


