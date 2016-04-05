CC = g++
CFLAGS = -g -std=c++11
INCPATH =
LIBS =

ifeq ($(OS), Windows_NT) # Windows
	LIBS += -lglew32 -lglfw3 -lopengl32
else # Linux
	LIBS += -lGLEW -lglfw3 -lGL -lX11 -lXi -lXrandr -lXxf86vm -lXinerama -lXcursor -lrt -lm -pthread -ldl
endif

triangle: triangle.cpp
	$(CC) $(CFLAGS) $(INCPATH) -o triangle triangle.cpp $(LIBS)
