CC = gcc
CFLAGS = -g
INCPATH =
LIBS =

ifeq ($(OS), Windows_NT) # Windows
	LIBS += -lglew32 -lglfw3 -lopengl32
else # Linux
	LIBS += -lGLEW -lglfw3 -lGL -lX11 -lXi -lXrandr -lXxf86vm -lXinerama -lXcursor -lrt -lm -pthread -ldl
endif

hello_window: main.c
	$(CC) $(CFLAGS) $(INCPATH) -o hello_window main.c $(LIBS)
