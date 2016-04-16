CC = g++
CFLAGS = -g -std=c++11
INCPATH = 
LIBPATH = 
LIBS = -lopencv_highgui -lopencv_core -lopencv_imgcodecs

ifeq ($(OS), Windows_NT) # Windows
	LIBS += -lglew32 -lglfw3 -lopengl32
else # Linux
	LIBS += -lGLEW -lglfw3 -lGL -lX11 -lXi -lXrandr -lXxf86vm -lXinerama -lXcursor -lrt -lm -pthread -ldl
endif

light_caster: shader.cpp shader.h main.cpp
	$(CC) $(CFLAGS) $(INCPATH) $(LIBPATH) -o light_caster shader.cpp main.cpp $(LIBS)
