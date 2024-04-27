/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","2cf8b2ff0df7fb0437385b1ee3a853de"],["/2019/01/02/Anconda常用命令总结/index.html","f4f3eae8554b6dc1f7fff0d5ac3cec15"],["/2019/01/02/句型/index.html","e060dfda21aa49e0fc3868f0e7ca4ffe"],["/2019/01/02/日语助词/index.html","77e35fc623786d909f9b0ed2c5a430d0"],["/2019/01/03/on-my-zsh/index.html","f4cc62cf57c93627c45a559b7772e2ba"],["/2019/01/04/《当我遇见一个人》摘录/index.html","c19bfc7b39c264a069ae7e5b55163549"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","30cdbebe803bf62e6282d0ea97277f76"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","3057f59455a94a3581905e8f7e0a846a"],["/2019/01/04/经济学笔记/index.html","b1640914bc18da33912e10d300330eed"],["/2019/01/04/语法总结（5-15）/index.html","e774fa521054afbd89cb5b3ff226c68e"],["/2019/01/05/linux常用命令/index.html","68760092f323c3cd0127d591f1750cb8"],["/2019/01/05/mamba/index.html","e3438292e64dc661cd9e5d8b23858e71"],["/2019/01/05/onnx2tflite/index.html","13dd35d9d065f8c6ebf9f25d5c28978a"],["/2019/01/05/torch安装/index.html","1bbe3f14f16c65f7cdac9e2421333b90"],["/2019/01/06/敬语/index.html","f6cacc05e21667803ec06d6d7a0b90cd"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","abd64e3756bf47a0983862adea220cd0"],["/2019/01/07/cuda 手动配置/index.html","0438f3143d060b988def6fe8855ebaca"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","e45c8f89775d851a1262e8ab34fa929d"],["/2019/01/07/docker-ldap-mysql/index.html","837c0298cda6be4039b2fee8ee09bcb4"],["/2019/01/07/docker代理/index.html","2371e611149c53328143bd9ea7aae435"],["/2019/01/07/docker安装/index.html","5d57b43328b11e34e9b8426786f7ea87"],["/2019/01/07/docker容器挂载硬盘/index.html","7994d9d4f68a8cd008c4b76d0fb57651"],["/2019/01/07/github上传代码/index.html","5a83179271c62052b797d46ec7eee44c"],["/2019/01/07/kaldi 安装/index.html","508c5ac4a4e5881e3253da7de0afa222"],["/2019/01/07/linux常用工具/index.html","8bbc3cd85bc7559d9b899dc0e84cfa95"],["/2019/01/07/opencv/index.html","17ebc9a604008f160db1cb53f1b31e7a"],["/2019/01/07/ssh 远程连接docker/index.html","90869de4c5360e73c4470dc9ff13209c"],["/2019/01/07/导出/index.html","25004944dc9f9fea5fe10ac088839a85"],["/2019/01/07/换源/index.html","bc1188920ce5fb2f20b0f971133490d0"],["/2019/01/07/服务器配置LDAP/index.html","9da9126907dc649eda074fe70cb4dcb7"],["/2019/01/09/markdown/index.html","0e35db1cab320fb37a20917ca9f1798a"],["/2019/01/09/opencv图像美化/index.html","b04269d6face272977f7400ef1cc0a6b"],["/2019/01/11/19单元语法/index.html","8d403061164f5a3a336862e84db530f3"],["/2019/01/11/20单元语法/index.html","8d66ccef847babd2cef2bd329dfa16f1"],["/2019/01/11/opencv-图片几何变换/index.html","5ade6b90dcb0a05926c9c65204f9caa9"],["/2019/01/11/opencv-图片处理及绘图/index.html","c07fa499694aa6a77b7a13d4efa012b4"],["/2019/01/11/wine安装qq/index.html","2846f8e7626baddb9a6c1ff212f3a1de"],["/2019/01/12/tensorflow-可视化/index.html","f411cb4ed7b1ca0d37dbaf8b92358da7"],["/2019/01/12/tensorflow-基础语法/index.html","0748be573b33602759e10c0c5ede102a"],["/2019/01/13/RNN/index.html","462b0fc33438d4f9a780963948db4961"],["/2019/01/13/keras实现CNN/index.html","65428a5e00e7c9c875b58f27322c1c67"],["/2019/01/13/卷积神经网络实现/index.html","b6045b6e659f8f80c96887abff197424"],["/2019/01/13/循环神经网络RNN-写诗/index.html","6e40fddeec7a42b1f970c42eabf02044"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","4a554593b2fff4fb6b3a8bf18b07ba29"],["/2019/01/14/反向传播/index.html","3b9751efed0fbd81e20cf868e74f5cb0"],["/2019/01/14/图床/index.html","45da9d95e402e6fd3d62536dc5b976a6"],["/2019/01/14/感知器与激活函数/index.html","91ee7eefed4d6e2652473c0ed63af2ad"],["/2019/01/15/PIL简单应用/index.html","400367165f6f1e83724075873673531e"],["/2019/01/15/卷积神经网络理论/index.html","b1892367e6be77380111fbdfbfb80358"],["/2019/01/15/图片分类之pca-svc/index.html","3c79ca0717216a9ce411306da570322d"],["/2019/01/15/强化学习基础/index.html","7ee83171294187961c8805bff60c443c"],["/2019/01/15/经典神经网络/index.html","8e35c05126371c318c406539d2103895"],["/2019/01/16/DQN/index.html","92120700542fe02a05275052faa8f6e1"],["/2019/01/16/TCP传输图片/index.html","1654bb98497b6362f5afe774e02c1053"],["/2019/01/16/时序差分学习/index.html","5885a7c7ec47ac0ea915d405738595d4"],["/2019/01/16/蒙特卡洛方法/index.html","5bc49686d9be7671a8b483231440ca60"],["/2019/01/17/Double-QDN/index.html","d22057d9fb5fa689830597e42b92e823"],["/2019/01/17/RNN理论/index.html","cd2ec1571c832f042cb231d1dd29cfa6"],["/2019/01/17/梯度下降/index.html","915ce1e2fdf7589751d3539664c71884"],["/2019/01/18/PG和TD3/index.html","edd811deaec72a3edf259a18e9258032"],["/2019/01/20/21单元语法/index.html","d314d938ecdfe0f9d947f5c6a7f88adc"],["/2019/01/20/GAN理论/index.html","631979641e81e4e7f02986b96674f11a"],["/2019/01/20/PG3和IRL/index.html","e7e4403497282b0b44013da30d92657d"],["/2019/01/20/数据集/index.html","bac9962a1c4f1eb3256dc930813288de"],["/2019/01/21/DCGAN/index.html","a22ac970fd81abc26a0e94489edbd514"],["/2019/01/21/LSTM/index.html","1f56e0fd41511d86bbfd5266c363a5f8"],["/2019/01/21/点击预估/index.html","1536c7374f16b74df88b516951d2a42d"],["/2019/01/22/SVD分解/index.html","6ea7fc2dcca44cd53004f63b23a5e217"],["/2019/01/22/SVM/index.html","dc6b8dd7ac40bea15676d376e401f039"],["/2019/01/22/机器学习简介/index.html","d8e273ed980700a5539d779179c40865"],["/2019/01/22/线性回归/index.html","96b9b2e57a2534cec8fd206a9d1d8d06"],["/2019/01/22/逻辑回归/index.html","8ee3faa1b737ec8fa8841e78930e5d29"],["/2019/01/23/numpy/index.html","4b62cf87d2d47c82cf6decc1994f5431"],["/2019/01/23/决策树与随机森林/index.html","f0c50617bb1fedca3b99b9941ea93460"],["/2019/01/23/聚类/index.html","12227b15244a6fb462f91863729aaa38"],["/2019/01/24/matplotlib/index.html","6bce0c882a1d0a05a8c7226f1823b60d"],["/2019/01/25/pandas/index.html","7722db90d30935a5d780b8c0c07f191a"],["/2019/01/25/语义分割/index.html","19f9d13b4dce36e222acfe504bc24f56"],["/2019/01/27/22单元语法/index.html","aae8fd9bed1b4514b3e3d42337f9513a"],["/2019/01/27/SVM案例/index.html","99c629ae6ad93b85d42ee6d6a3fac490"],["/2019/01/28/requests库及爬虫案例/index.html","29a714df3761bab092e72e057f7fb304"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","86f44def96f2ebfca3411d4a39804167"],["/2019/01/28/异常/index.html","5e6011cf2a64b16ffac5dbf90b013151"],["/2019/01/28/描述器和装饰器/index.html","b37de7b4e815ada4cf5b8498de93fea0"],["/2019/01/28/文件/index.html","abd93ebadfe83b4a5886e05897d0220b"],["/2019/01/28/正则/index.html","41d5b07657c7d9e83f68c91aab295036"],["/2019/01/29/函数基础和函数参数/index.html","afef6db2e79b8586f34c0a7e34293ffa"],["/2019/01/29/多继承和魔方方法/index.html","1776332819043379d2d8782e93673fa8"],["/2019/01/29/类定义、属性和继承/index.html","3f15df1b6cdf6c44e95f8253b17d9dea"],["/2019/02/27/23单元/index.html","e97c628d87b1a1b08371b1191414aa8b"],["/2019/03/12/hexo加速/index.html","558b9a67ab153012fe12e6f661c8ba61"],["/2019/03/12/hexo系统重装恢复/index.html","ef9467d9de20c337d809295fab5d34a5"],["/2019/03/13/24单元/index.html","80fea5c0238ffe13130a5213a62344ff"],["/2019/03/19/25单元/index.html","8a6b92cb5eb91dfec6b51ca9d27138f2"],["/2019/03/26/26单元/index.html","009b381d340d2c304c6476e5daeff680"],["/2019/04/14/27单元/index.html","f0473791e73f1603551dc58d051a6b03"],["/2019/05/01/28单元/index.html","25f8d99d95301db5cfdba6d73ad43d47"],["/2019/05/02/29单元/index.html","2f522c8ec4e9c9650e660bd1df5acbd7"],["/2019/05/12/30单元/index.html","8a24edd96418500e75ed0ff933026521"],["/2019/06/03/jni/index.html","ee8d5681a4eae27ad10f09b75752560c"],["/2019/06/07/JNA/index.html","32f3855b5afecec31d6c2619e6ec4bcc"],["/2022/08/07/R配置jupyter/index.html","2f23c219317b4fbf7a8fdd519a77b06b"],["/2022/08/18/FFmpeg常用命令/index.html","3f4fbad8bf2239084146a6a47c0f4aec"],["/2022/08/18/linux系统代理/index.html","a1694711e64af9c51e212acd773d4ec4"],["/2022/08/18/matplotlib补充/index.html","bf17f033e570dfc9f4fae02233690e9e"],["/2022/08/18/常用命令/index.html","7e4027a6a29712a08baabed5b6e6d28a"],["/2022/08/20/sacred/index.html","81903c482dbc841ac5af5a9814d2a59a"],["/2022/08/20/wsl/index.html","c88bd096fd0d2921f68324507f59c6ae"],["/2022/08/20/双系统安装/index.html","0a2379838edb48bf716fdef5513fe257"],["/2023/06/28/source/index.html","66d77630ae1d355b509d1786207b231f"],["/archives/2018/12/index.html","f639cadc10e8df1dfc12cad8e5caad03"],["/archives/2018/index.html","c0d4614b220bf6f93e2637d0d58904a3"],["/archives/2019/01/index.html","6f36576837acef07df1262aabc32d1cf"],["/archives/2019/01/page/2/index.html","9e72bbf7ce51dae5e46020229ac89b41"],["/archives/2019/01/page/3/index.html","feca19afabede2b1edc1679518d709f6"],["/archives/2019/01/page/4/index.html","811526c7beffea70557a99c07254131b"],["/archives/2019/01/page/5/index.html","c5ccc2fdc0481bbfc75986591659e1ca"],["/archives/2019/01/page/6/index.html","862e23c65f7aadb9ed770a1707c42aa6"],["/archives/2019/01/page/7/index.html","d08370f56ea59ce87bed144d225d0aee"],["/archives/2019/01/page/8/index.html","91bd752f5f143d15ea83222a0252c13a"],["/archives/2019/01/page/9/index.html","75d7ed79fa075e5b5426d6d068bfb4c4"],["/archives/2019/02/index.html","a3d43a6a9e082699f18ff9a244495cf6"],["/archives/2019/03/index.html","e5c351527021805767846bf6b6b9dfd6"],["/archives/2019/04/index.html","136262c3a41761726fb322f0f50f6f4e"],["/archives/2019/05/index.html","568dc15dfa6b24f6ca77f3342c3d41ff"],["/archives/2019/06/index.html","c497aeb57d625d84ecebffd4c7553a53"],["/archives/2019/index.html","7c3e0e1578dd55542ac55a1f28b1df66"],["/archives/2019/page/10/index.html","ac563494e4673eb296e339dcf201bf0c"],["/archives/2019/page/2/index.html","18c4cbc6ea250d61a2bc61ff5adf4c75"],["/archives/2019/page/3/index.html","968d0e81fa7814450908b62f62af0314"],["/archives/2019/page/4/index.html","4b97460ae6cbdf82355bd8ced78e0a08"],["/archives/2019/page/5/index.html","4320637605edb5440bd69bb7cc4f900c"],["/archives/2019/page/6/index.html","86db2394bf5e480c4bf6f3910d84cce7"],["/archives/2019/page/7/index.html","f602bd14249be56f76d44e9d25f2ffc1"],["/archives/2019/page/8/index.html","ca91e40acb09d996963b71a33f64ea13"],["/archives/2019/page/9/index.html","1518791557071667f1cb37b0291fa83d"],["/archives/2022/08/index.html","424de161387f1ce0289f2d2432404a93"],["/archives/2022/index.html","887fcc40f03279a2dfb21aa1e4665e02"],["/archives/2023/06/index.html","f30323f86cd343a3ef034646c903b161"],["/archives/2023/index.html","aef0921d793c50cc0cd22ae679b6b5e1"],["/archives/index.html","8ca3853567a9a7b80b165225f093db20"],["/archives/page/10/index.html","ed23f16924831fc2b9a325896caa4d3b"],["/archives/page/11/index.html","c161171e94900d8cf819e0d8ee637620"],["/archives/page/2/index.html","588000e586d25b6912f9e0294e82e7ee"],["/archives/page/3/index.html","850153034e98c5f380b5300d074db4ad"],["/archives/page/4/index.html","bf925037585f242a66e8c86927b3d717"],["/archives/page/5/index.html","dd20c4997c93aab5e42a77d66c289691"],["/archives/page/6/index.html","ad3c3a1402e662d246be6c79639b2c32"],["/archives/page/7/index.html","fe69ae3be97a3d3f53dc14b5f9dd301e"],["/archives/page/8/index.html","5594463c6f77a0a05282bd0bbd5905db"],["/archives/page/9/index.html","0da07afa14dbbf1af14017d6a2fd2f29"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","200fcb2668cbbc0c8c387f94276b03ae"],["/categories/dxz/index.html","8c2793d598df076a966ea59b97ecb1c2"],["/categories/index.html","18f932642613d1543fef48ce2006c5e0"],["/categories/linux/index.html","62e36ffc9ccff2f5dcee7b13ce9cf26e"],["/categories/python/index.html","1df2aade0bb616e0475f343e9609923a"],["/categories/tensorflow/index.html","685db79d786b9d9bc2cda25602396bbd"],["/categories/图片分类/index.html","b8493c56ccc765720dfc3c5ac36beb76"],["/categories/工具/index.html","742a6b2e788cd9463c81bd8002b00889"],["/categories/工具/page/2/index.html","058794ae790ff27cee0d5494dbe64455"],["/categories/强化学习/index.html","e48682d67292bd982d852e67dd67cdba"],["/categories/数据集/index.html","a1b480f527e5b2bb8990ba81a3c05993"],["/categories/日语/index.html","c0237cb133837760448a3b514bd3c6f4"],["/categories/日语/page/2/index.html","e55b4db67dcb87e3994c0f35591bf831"],["/categories/机器学习/index.html","8906f40c3e80fe5a6838adbf55d6be0a"],["/categories/深度学习/index.html","a6f4a8923896420e6490590185063eb1"],["/categories/深度学习/page/2/index.html","1bdaa04869f8219800a3e8dc837298a7"],["/categories/深度学习环境配置/index.html","5325b327e40677e105e021d393ce1f51"],["/categories/深度学习移植/index.html","20672ef34e0b12903a10e00cf101ed6f"],["/categories/计算机视觉/index.html","6dcf6ed526090494217e0e7e09040c1b"],["/categories/读书笔记/index.html","b10ca21160ffcab8f294d9565bdc2cce"],["/css/main.css","baaef2f39d972d4c0183e0502205ee17"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bd1ecc80a28e103d7d5869d838cd47b2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","68c0965415db4851ca68ce3ab640899c"],["/page/11/index.html","949fe5a77c580feca07511b0386b3a96"],["/page/2/index.html","e806571b12dc2bd69ef397c39d0b01dc"],["/page/3/index.html","2bf5c6f37f7bb786fa21b5a8a6df4a9f"],["/page/4/index.html","d0571dbd9175c34f2ab859999aac0366"],["/page/5/index.html","bf576414251db3a05b6fe46cdb63c4b6"],["/page/6/index.html","477307719507449eb0baa53040d266e6"],["/page/7/index.html","e6ebc5407efd2827f996dc28fdab8f97"],["/page/8/index.html","b469651f4a5d01d40f36723b47a96808"],["/page/9/index.html","cb82eb6d672d2dff27d93dc6b737ad2a"],["/sw-register.js","66879926bb62aa37b2978f430a82e449"],["/tags/AlexNet/index.html","126747e1426667aef34319229c70e722"],["/tags/CNN/index.html","92733171d13d23b9755979f6d52af42f"],["/tags/DCGAN/index.html","483d553f5cf50ad3e7d5017eb2b78350"],["/tags/DDPG/index.html","b398e331a859ef4eb8e64517bac4fb87"],["/tags/DDQN/index.html","3bf2e15330f351bcb35808f450ff3594"],["/tags/DQN/index.html","06d7cef0ea60f4cc9e24cf42485b23bf"],["/tags/GAN/index.html","c4e4de13a32666db90c8f3af55a91c4f"],["/tags/IRL/index.html","cd86d6f9124d3c09d3506416098d939a"],["/tags/LSTM/index.html","97f172d133e79627ad21c6c474e10c78"],["/tags/LeNet/index.html","ea3e5b831f590212061371988bce8dd7"],["/tags/MC/index.html","78379ce8abd61f878821f04be70dceab"],["/tags/PCA/index.html","eb2bd60a5e60a789fd411389a59086bb"],["/tags/PG/index.html","711ae1463bd7505a3adfe70cea26e335"],["/tags/PG3/index.html","5a6f6596d84dabd8f89cc2edb0d201be"],["/tags/PIL/index.html","449ddeb8648e5fb89d80fa004f61b962"],["/tags/R/index.html","1b35c127418d30670fcddf1f6b5d5adb"],["/tags/RNN/index.html","df5b3fb5dbca07e7ca46b7d54ee40001"],["/tags/SVC/index.html","529643b0c5ff50e626d23e06f72c3002"],["/tags/SVD/index.html","04cbbd049e9da8209f26e059815e4da7"],["/tags/SVM/index.html","f8b432c65398484e5daa969d232a9964"],["/tags/TCP/index.html","6b380f013da487afd45b3af58351b9b6"],["/tags/TD/index.html","d43e79581a052527e86aa226d24bbf35"],["/tags/TD3/index.html","ab0a8fb841a2f55b6e3a90ff17e417b5"],["/tags/VGG/index.html","80c797709aeaa2b0e3e905fa02ad4335"],["/tags/amd配置/index.html","4efbc53394c5878fa5f1eca6699f1592"],["/tags/anconda/index.html","05a580b322a77dce6c2e9893793acabf"],["/tags/conda常用命令/index.html","9f25d8c9d905c5865eac67bf754025a9"],["/tags/cuda配置/index.html","5dbc955bb57eb08a760920657a7ad363"],["/tags/docker-ldap-mysql-arm64/index.html","c39222e01ad79b85ea966eba1e52ae63"],["/tags/docker-ldap-mysql/index.html","4778dfe60edd79299897199bcc3a6cbc"],["/tags/docker代理/index.html","1c5c0b06b15ec9d4fc10c75460f3ad77"],["/tags/docker安装/index.html","d4b349f9ab83f08d0861263ce339bf52"],["/tags/docker容器挂载硬盘/index.html","d9903c410d6cc5ea3b597c135c3a78c7"],["/tags/ffmpeg/index.html","24b5232db2bce20aba36cfb03b875be8"],["/tags/github上传代码/index.html","fd1c6f39866f3f9cdd0669ea5ea2431b"],["/tags/hexo/index.html","008134a3043e4b481898575b07c613a9"],["/tags/index.html","14dcb097f5459d50d8a0acaad71aeab9"],["/tags/java调用C/index.html","d0629bb39673c7e74033f60c0525aa39"],["/tags/kaldi/index.html","7645f875cd9a5f8af9686f13cc998832"],["/tags/linux命令/index.html","75dcd953cd440880a5a29243415b84b5"],["/tags/mamba/index.html","0453360d036f35ba321c58b6da24ce79"],["/tags/markdown/index.html","e3da652fb72f231a19f8d27a2acffe97"],["/tags/matplotlib/index.html","4b9832c2078a504f55de3883a13c4f14"],["/tags/numpy/index.html","18203741473e191ee135f3ff280eb5b2"],["/tags/onnx2tflite/index.html","74d27fccb951b858078a2a6c56c13013"],["/tags/opencv/index.html","d36f8a20256d1272ccb01eef6f310fbf"],["/tags/pandas/index.html","1069b6099b624363afb1d7c35910f8df"],["/tags/qq/index.html","e286f134a8ff13a9e6d764fa15709b23"],["/tags/requests库/index.html","fc824738d32ece4601030961d4cea5e1"],["/tags/sacred/index.html","b62529331604b95097dbc8124da750f7"],["/tags/ssh-远程连接docker/index.html","89533b3f9c38f3cab6213283de6da244"],["/tags/torch和apex安装/index.html","3613e8b9140c3d5aed1859369cfbcbed"],["/tags/wsl/index.html","720b1765a50662a8e3b7d3b9969676f5"],["/tags/zsh/index.html","457cc8464d5c9d603bfb176b4c0b011c"],["/tags/代理/index.html","f84ccd049777e81f360c65f65da249a8"],["/tags/决策树/index.html","58775e2df1df907e348bb52d37d6cdc1"],["/tags/函数/index.html","f55392d384d1e0ed1afcd3d10f6bc7fa"],["/tags/列表推导式/index.html","edf08953e2fb71928ed04290c6472b83"],["/tags/助词/index.html","1c417dd740a9420386cc772f9b623cf1"],["/tags/包/index.html","b79bf9da9af76e748fe32be05cc6aa1b"],["/tags/卷积神经网络/index.html","c466e30146f50e832bcd0a775e74cd22"],["/tags/双系统安装/index.html","d7307ebb92ce79c7c3a69ad40f60147d"],["/tags/反向传播/index.html","d5b5d100dc7cb9d87498efd15092a8dd"],["/tags/句型/index.html","d14cd5753b9fb98e17840e14ddc7a58b"],["/tags/可视化/index.html","f83394f201dbd4fe1423f41456bea4ab"],["/tags/哲学/index.html","58a8b847ca47537ef9a7db9910dfbd56"],["/tags/图像美化/index.html","239c4a2878bb4e436487117919640c83"],["/tags/图床/index.html","164d52aeb96f92be419a544e87c42b15"],["/tags/多继承/index.html","b8a4eba5bca87d58e940bf7f430e6d4f"],["/tags/工具/index.html","ce14614326bf6b6554ca4cfc380e4fbb"],["/tags/异常/index.html","9f6954e532abdc73d7d918c5f28d9773"],["/tags/强化学习/index.html","b8602237f8c6495ad0bc306bff65541b"],["/tags/心理学/index.html","ef73df9db886c5f1616a46fcbe7b4bf7"],["/tags/感知器/index.html","aadc70c65792fb55553f3b50b4de8554"],["/tags/换源/index.html","224b63066b12ef96ddcd1b15beac8939"],["/tags/描述器/index.html","46fb74637b05f56cdd3d589a09fe5424"],["/tags/敬语/index.html","c9f506fc6a1d5d3d889ccd3e12c53bf0"],["/tags/数据集/index.html","1fb421174f4f7858adf245c3652b8361"],["/tags/文件/index.html","ac3eee6bcdc216413a52509d5a7165b5"],["/tags/服务器配置LDAP/index.html","573724ab6020bf098ad944fd6b13f6cc"],["/tags/机器学习/index.html","a9cf8198412bbe8d75f292b38a916451"],["/tags/梯度下降/index.html","3b040e90af475c1c9e7b52e80d41a7aa"],["/tags/模块/index.html","ada93e8d368eab34a522d22767c566b9"],["/tags/正则/index.html","9d682b8ac54f617d140a5333c6ecbbaf"],["/tags/激活函数/index.html","e44829d8d2dcd98689a23bc5cbccb388"],["/tags/点击预估/index.html","3d45906cbe1f401514d370ce15b55401"],["/tags/爬虫/index.html","52fcfa575024354e1f88080cbc0cf3c9"],["/tags/生成器/index.html","2ea85032bc667f265d5b5c4104626750"],["/tags/类/index.html","91cdf19d26fc1e75bfa599957e088379"],["/tags/线性回归/index.html","abdcc7d4b3fb3b63fca7c132469db61f"],["/tags/经济学/index.html","32586321b5a9386a7607f636635cbbf8"],["/tags/聚类/index.html","81078ce2c9f1543fe354fd39eb0ecdcd"],["/tags/装饰器/index.html","24c25d465e52957e920df699eaea24f0"],["/tags/词型变换/index.html","af94b5615e277d858d59f29b3f27682c"],["/tags/语义分割/index.html","c4ec03b310ca671d474301cbeff87bf4"],["/tags/语法/index.html","d81bc2b178b8e9810081b6e9e253d933"],["/tags/语法/page/2/index.html","d00c0e82078f3b8817e38a2de41e8808"],["/tags/迭代器/index.html","461ce6f8438dcf4d22e70215a21d4092"],["/tags/逻辑回归/index.html","da31bb2c8359f34c267d43bc5f6f51cd"],["/tags/随机森林/index.html","85cae640533a0f49c2d4e88370da9bcb"],["/tags/魔方方法/index.html","90714bc349351e0df6677f257934a12c"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
