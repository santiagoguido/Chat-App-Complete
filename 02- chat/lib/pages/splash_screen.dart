import 'package:another_flutter_splash_screen/another_flutter_splash_screen.dart';
import 'package:chat/pages/loading_page.dart';
import 'package:chat/widgets/labels.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlutterSplashScreen(
      duration: const Duration(milliseconds: 3000),
      defaultNextScreen: LoadingPage(),
      backgroundColor: Color(0xffdedddd),
      splashScreenBody: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: 100,
            ),
            const Spacer(),
            SizedBox(
              width: 500,
              child: Lottie.asset('assets/loading-chat.json'),
            ),
            const Spacer(),
            const SizedBox(
              height: 100,
            ),
          ],
        ),
      ),
    );
  }
}