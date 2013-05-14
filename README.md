#NoLint

NoLint is Mozilla Firefox static analysis plugin built off of the NoScript Firefox plugin. The NoScript plugin is something used to stop certain scripts from running, mainly used as a security tool. However, we’ve used the technology for ‘grabbing’ scripts and repurposed it to grab a chosen script running on a page and analyze the code as we will describe below.

NoLint offers programmers the ability to statically analysis their source code without ever having to navigate back to their IDE. Truly, the Mozilla Firefox and Google Chrome web developer consoles lack in debugging tools. The web console especially lacks with Javascript debugging. At times these web consoles will not supply bug a line number which greatly helps programmers debug errors. NoLint, is able supply programmers with valuable debugging information while assisting with programming style. 

The goal of NoLint is to assist web developers with debugging, while providing Mozilla Firefox users with a safe way to browse. NoLint will be able to block scripts that don’t conform to a web developer code standards. NoScript is an interactive plugin that allows Firefox users the ability to block scripts. NoLint is going to use this framework to block scripts that don’t pass static analysis test. 
