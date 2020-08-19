# AWS Oncall

NOTE: This repository is deprecated, but still exists while its workflows are being migrated out.

## Build Status

### ROS 2 Core Packages

|                          | GCC ASAN                                                        | GCC TSAN                                                        | Clang Thread-Safety Annotations                                   |
|--------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------------------------------------|
| **x86_64 Ubuntu Bionic** | [![Build Status][nightly-linux-asan-badge]][nightly-linux-asan] | [![Build Status][nightly-linux-tsan-badge]][nightly-linux-tsan] | [![Build Status][nightly-linux-clang-badge]][nightly-linux-clang] |

### Other Packages

#### Owned Repositories

##### Latest (`master`)

| Repository Name                        | Latest                                                                         | Nightly | Coverage                                                                   | Issues                                                                           | PRs                                                                                          |
|----------------------------------------|--------------------------------------------------------------------------------|---|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [colcon/colcon-bundle]                 | [![Build Status][colcon-bundle-action-badge]][colcon-bundle-action]            | N/A | N/A                                                                        | [![GitHub issues][colcon-bundle-issues-badge]][colcon-bundle-issues]                        | [![GitHub pull requests][colcon-bundle-pr-badge]][colcon-bundle-pr]                       |
| [colcon/colcon-ros-bundle]             | [![Build Status][colcon-ros-bundle-action-badge]][colcon-ros-bundle-action]    | N/A | N/A                                                                        | [![GitHub issues][colcon-ros-bundle-issues-badge]][colcon-ros-bundle-issues]                | [![GitHub pull requests][colcon-ros-bundle-pr-badge]][colcon-ros-bundle-pr]               |
| [colcon/colcon-sanitizer-reports] | [![Build Status][colcon-sanitizer-reports-azure-badge]][colcon-sanitizer-reports-azure] | N/A | N/A | [![GitHub issues][colcon-sanitizer-reports-issues-badge]][colcon-sanitizer-reports-issues] | [![GitHub pull requests][colcon-sanitizer-reports-pr-badge]][colcon-sanitizer-reports-pr] |


[colcon/colcon-bundle]: https://github.com/colcon/colcon-bundle
[colcon/colcon-ros-bundle]: https://github.com/colcon/colcon-ros-bundle
[colcon/colcon-sanitizer-reports]: https://github.com/colcon/colcon-sanitizer-reports

[nightly-linux-asan]: https://ci.ros2.org/view/nightly/job/nightly_linux_address_sanitizer
[nightly-linux-asan-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux_address_sanitizer/badge/icon
[nightly-linux-tsan]: https://ci.ros2.org/view/nightly/job/nightly_linux_thread_sanitizer
[nightly-linux-tsan-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux_thread_sanitizer/badge/icon
[nightly-linux-clang]: https://ci.ros2.org/view/nightly/job/nightly_linux_clang_libcxx
[nightly-linux-clang-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux_clang_libcxx/badge/icon

[nightly-linux-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux_debug
[nightly-linux-debug-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux_debug/badge/icon
[nightly-linux-release]: https://ci.ros2.org/view/nightly/job/nightly_linux_release
[nightly-linux-release-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux_release/badge/icon
[nightly-linux-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux
[nightly-linux-packaging-badge]: https://ci.ros2.org/view/packaging/job/packaging_linux/badge/icon

[nightly-linux-aarch64-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_debug
[nightly-linux-aarch64-debug-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_debug/badge/icon
[nightly-linux-aarch64-release]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_release
[nightly-linux-aarch64-release-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_release/badge/icon
[nightly-linux-aarch64-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux-aarch64
[nightly-linux-aarch64-packaging-badge]: https://ci.ros2.org/view/packaging/job/packaging_linux-aarch64/badge/icon

[nightly-linux-armhf-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux-armhf_debug
[nightly-linux-armhf-debug-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux-armhf_debug/badge/icon
[nightly-linux-armhf-release]: https://ci.ros2.org/view/nightly/job/nightly_linux-armhf_release
[nightly-linux-armhf-release-badge]: https://ci.ros2.org/view/nightly/job/nightly_linux-armhf_release/badge/icon
[nightly-linux-armhf-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux-armhf
[nightly-linux-armhf-packaging-badge]: https://ci.ros2.org/view/packaging/job/packaging_linux-armhf/badge/icon

[nightly-osx-debug]: https://ci.ros2.org/view/nightly/job/nightly_osx_debug
[nightly-osx-debug-badge]: https://ci.ros2.org/view/nightly/job/nightly_osx_debug/badge/icon
[nightly-osx-release]: https://ci.ros2.org/view/nightly/job/nightly_osx_release
[nightly-osx-release-badge]: https://ci.ros2.org/view/nightly/job/nightly_osx_release/badge/icon
[nightly-osx-packaging]: https://ci.ros2.org/view/packaging/job/packaging_osx
[nightly-osx-packaging-badge]: https://ci.ros2.org/view/packaging/job/packaging_osx/badge/icon

[nightly-win-debug]: https://ci.ros2.org/view/nightly/job/nightly_win_deb
[nightly-win-debug-badge]: https://ci.ros2.org/view/nightly/job/nightly_win_deb/badge/icon
[nightly-win-release]: https://ci.ros2.org/view/nightly/job/nightly_win_rel
[nightly-win-release-badge]: https://ci.ros2.org/view/nightly/job/nightly_win_rel/badge/icon
[nightly-win-packaging]: https://ci.ros2.org/view/packaging/job/packaging_windows
[nightly-win-packaging-badge]: https://ci.ros2.org/view/packaging/job/packaging_windows/badge/icon

[colcon-bundle-action]: https://github.com/colcon/colcon-bundle/actions
[colcon-bundle-action-badge]: https://github.com/colcon/colcon-bundle/workflows/Testing%20workflows%20for%20colcon-bundle/badge.svg
[colcon-bundle-issues]: https://github.com/colcon/colcon-bundle/issues
[colcon-bundle-issues-badge]: https://img.shields.io/github/issues/colcon/colcon-bundle
[colcon-bundle-pr]: https://github.com/colcon/colcon-bundle/pulls
[colcon-bundle-pr-badge]: https://img.shields.io/github/issues-pr/colcon/colcon-bundle

[colcon-ros-bundle-action]: https://github.com/colcon/colcon-ros-bundle/actions
[colcon-ros-bundle-action-badge]: https://github.com/colcon/colcon-ros-bundle/workflows/Test%20colcon-ros-bundle/badge.svg
[colcon-ros-bundle-issues]: https://github.com/colcon/colcon-ros-bundle/issues
[colcon-ros-bundle-issues-badge]: https://img.shields.io/github/issues/colcon/colcon-ros-bundle
[colcon-ros-bundle-pr]: https://github.com/colcon/colcon-ros-bundle/pulls
[colcon-ros-bundle-pr-badge]: https://img.shields.io/github/issues-pr/colcon/colcon-ros-bundle

[colcon-sanitizer-reports-azure]: https://dev.azure.com/osrf/colcon-sanitizer-reports/_build/latest?definitionId=1&branchName=master
[colcon-sanitizer-reports-azure-badge]: https://dev.azure.com/osrf/colcon-sanitizer-reports/_apis/build/status/colcon.colcon-sanitizer-reports?branchName=master
[colcon-sanitizer-reports-issues]: https://github.com/colcon/colcon-sanitizer-reports/issues
[colcon-sanitizer-reports-issues-badge]: https://img.shields.io/github/issues/colcon/colcon-sanitizer-reports
[colcon-sanitizer-reports-pr]: https://github.com/colcon/colcon-sanitizer-reports/pulls
[colcon-sanitizer-reports-pr-badge]: https://img.shields.io/github/issues-pr/colcon/colcon-sanitizer-reports
