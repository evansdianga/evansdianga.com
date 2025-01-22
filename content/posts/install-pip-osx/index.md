---
title: Installing Python 3 and Pip on Mac OS
date: "2017-05-11"
disableShare : true
tags: ["python", "pip", "macOS"]
---

Apple's Mac OS comes with python 2.7 installed by default. Perhaps you may want to use python 3.x.x on your machine and also use pip for package management with `python 3.x.x.` The easiest way to achieve this is by:

**NOTE**: This tutorial **does not use** [Virtual Environments](https://packaging.python.org/installing/#creating-and-using-virtual-environments) like [`virtualenv`](https://packaging.python.org/key_projects/#virtualenv) or [`pyenv`](https://packaging.python.org/key_projects/#venv) to manage various `python` versions

## 1. Installing `python3`

- Follow [this link](https://www.python.org/) and download the latest `python3` `OS X` package
- Run the package and follow the steps to install `python3` on your computer.
- Once the installation is done, on your `Terminal`, run

```bash
python3 --version
```

This will print out the version of python installed on your system. The output should be similar to:

```bash
Python 3.6.1
```

You may verify the installation directory of `python` by runningthe following line on the `Terminal`.

```bash
which python3
```

The prompt should print the install path for `python3`. An example output is:

```bash
/Library/Frameworks/Python.framework/Versions/3.6/bin/python3
```

## 2. Install `pip3`:

- Securely download the `get-pip.py` file from this [link](https://pip.pypa.io/en/stable/installing/)
- From the directory where the file was downloaded to, run the following command in the `Terminal`

```bash
 python3 get-pip.py
```

- Once the installation completes you should see the prompt print message similar to this
- Verify the installation of `pip3` by running the following on the `Terminal`

```bash
which pip3
```

This should return the install location of `pip3`.

- To install `python3` packages using `pip3`, run

```bash
pip3 packageName
```

Remember to replace `packageName` with the appropriate package name for your case.

Happy Pythoning!
