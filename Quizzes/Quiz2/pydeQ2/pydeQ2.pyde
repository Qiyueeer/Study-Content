# Qiyyue Zhang
# Use your mouse! I set up some interestimg characters. 
someBot = True;

#a:triangle
#b:rect
#c:ellipse

 
# 2. how to setup: setup(), draw() - like always
def setup():
  size(1000,1000);
  global oldbot,grandparent1,grandparent2,parent1,parent2,parent3,parent4,babyrobot1,babyrobot2,babyrobot3,babyrobot4; 
 
  oldbot = GrandParentsrobot("c",200,200,color(128),"oldbot");
  grandparent1 = GrandParentsrobot("c",800,200,color(255,205,67),"grandparent1");
  grandparent2 = GrandParentsrobot("c",200,800,color(255,205,67),"grandparent2");
  
  parent1 = Parentsrobot("c",400,600,color(246,153,180),"parent1");
  parent2 = Parentsrobot("b",470,200,color(246,153,180),"parent2");
  parent3 = Parentsrobot("a",360,120,color(246,153,180),"parent3");
  parent4 = Parentsrobot("c",56,400,color(246,153,180),"parent4");
  
  babyrobot1 = Babyrobot("c",600,700,color(19,67,129),"babyrobot1");
  babyrobot2 = Babyrobot("b",270,500,color(19,67,129),"babyrobot2");
  babyrobot3 = Babyrobot("a",160,520,color(19,67,129),"babyrobot3");
  babyrobot4 = Babyrobot("a",556,500,color(19,67,129),"babyrobot4");
  
  
  
  global bg;
  bg = loadImage("img.png");
  

def draw():
  background(255);
  image(bg,0,0,width,height);
  oldbot.display();
  grandparent1.display();
  grandparent2.display();
  
  parent1.display();
  parent2.display();
  parent2.skill();
  parent3.display();
  parent4.display();
  
  babyrobot1.display();
  babyrobot2.display();  
  babyrobot3.display();
  babyrobot3.move();
  babyrobot4.display();

#----------------------------------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------------------------------------
# FLARE? INTERACTION? SAVING A PICTURE?
#----------------------------------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------------------------------------

# 3. do you want some interactivity?
def flare():
  pass;

#----------------------------------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------------------------------------
# THE CLASS
#----------------------------------------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------------------------------------

# 4. OOP setup for a python class
class GrandParentsrobot(object):
  # we need to ask ourselve: what attributes, or characteristics do we want our robots to have?
  # also, how do we know what is a child and what is a parent?

  # 4a. initialize -> think of me as a 1-to-1 with def setup()
  # I am needed for an instance of class to exist ( I self, therefore I am )
  def __init__(self, headType, x, y, c,name):
    self.headType = headType;
    self.x = x;
    self.y = y;
    self.c = c;
    self.headSize = 50;
    self.bodySize = 80;
    self.name = name;
 

  # 4c. display -> think of me as a 1-to-1 with def draw():
  def display(self):
    fill(self.c);
    if self.headType=="c":
        ellipse(self.x,self.y+self.headSize/4,self.headSize,self.headSize/2);
    if self.headType=="b":
        rect(self.x-self.headSize/2,self.y-self.headSize/2,self.headSize,self.headSize);
    if self.headType=="a":
        x1 = self.x - self.headSize/2;
        y1 = self.y + self.headSize/2;
        x2 = self.x + self.headSize/2;
        y2 = self.y + self.headSize/2;
        x3 = self.x;
        y3 = self.y - self.headSize/2;
        triangle(x1,y1,x2,y2,x3,y3);
    rect(self.x-self.bodySize/2,self.y+self.headSize/2,self.bodySize,self.bodySize);
    fill(255);
    textSize(20);
    text(self.name,self.x+self.bodySize/2,self.y);

class Parentsrobot(GrandParentsrobot):
  # we need to ask ourselve: what attributes, or characteristics do we want our robots to have?
  # also, how do we know what is a child and what is a parent?

  # 4a. initialize -> think of me as a 1-to-1 with def setup()
  # I am needed for an instance of class to exist ( I self, therefore I am )
  def __init__(self, headType, x, y, c,name):
      super(Parentsrobot,self).__init__(headType, x, y, c,name);
  

  # 4c. display -> think of me as a 1-to-1 with def draw():
  def display(self):
      super(Parentsrobot,self).display();
  def skill(self):
         if mousePressed:
            fill(random(255),random(255),random(255));
            rect(self.x-self.bodySize/2,self.y+self.headSize/2,self.bodySize,self.bodySize);
      
      
class Babyrobot(Parentsrobot):
  # we need to ask ourselve: what attributes, or characteristics do we want our robots to have?
  # also, how do we know what is a child and what is a parent?

  # 4a. initialize -> think of me as a 1-to-1 with def setup()
  # I am needed for an instance of class to exist ( I self, therefore I am )
  def __init__(self, headType, x, y, c,name):
      super(Babyrobot,self).__init__(headType, x, y, c,name);
 

  # 4c. display -> think of me as a 1-to-1 with def draw():
  def display(self):
      super(Parentsrobot,self).display();
  def move(self):
      if mousePressed:
        self.x+=random(-5,5);
        self.y+=random(-5,5);
        
 
    
