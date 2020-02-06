---
name: Build Issue
about: A build is RED or YELLOW
title: ''
labels: ''
assignees: ''

---

## Overview

One of the builds we care about is not good!

* [ ] Add failure type label to this issue (build failure, test failure, build warning)
* [ ] Add environment labels to this issue (platform, arch - choose all that apply)
* [ ] Please give a one sentence overview of the failure cause we're tracking
* [ ] Please title this issue specifically but succinctly, e.g. :
    * "nightly linux armhf is failing rviz test"
    * "Windows Packaging build has linter errors"
    * "cmake warnings in all armhf nightly builds"

## Required Information

* **Job Home**: <e.g. https://ci.ros2.org/view/nightly/job/nightly_win_deb/, e.g. not a numbered build>
* **First Failing Build** (or oldest/old-ish one with this issue that you can find, best effort): 
* **Latest Failing Build** (try to keep this up to date): 
* **External tracking ticket**: <Create a ticket on the relevant repository to report the issue to the maintainers. If that's not appropriate for this issue explain why here>
