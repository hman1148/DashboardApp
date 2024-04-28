cmake_minimum_required(VERSION 3.28)
project(App)

set(CMAKE_CXX_STANDARD 23)

find_package(Crow)

add_executable(App main.cpp)  # Define the target first

target_link_libraries(App PUBLIC Crow::Crow)  # Link the target to the library
