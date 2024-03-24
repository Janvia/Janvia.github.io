/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","d4d32ebfc197c1f1faa73a203f250fd1"],["/2019/01/02/Anconda常用命令总结/index.html","994e550d2cba7046afeba5eeaa14d494"],["/2019/01/02/句型/index.html","170fcf4a5fcae2decf061c1bf31ef57c"],["/2019/01/02/日语助词/index.html","00a0e4d1c0423cd2ebaaf7a0af95f050"],["/2019/01/03/on-my-zsh/index.html","8b64e275d98a1a86ff0efe2a2e14b262"],["/2019/01/04/《当我遇见一个人》摘录/index.html","9863f3148bb253d1fc312dbf21615bfa"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","f7af3a6b8306f8034ff7366738a40cd6"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","a27427a0a0c1c5d0d8356aff73c5001d"],["/2019/01/04/经济学笔记/index.html","c2cfa3880bfb816b3aeed1d18118eda0"],["/2019/01/04/语法总结（5-15）/index.html","7d1e22d66f8aa16a697f87996c15dc15"],["/2019/01/05/linux常用命令/index.html","9c0eb6a9af96097e6705f18cbbf018c3"],["/2019/01/06/敬语/index.html","31a8d20bb303f30ca21b022d0e38609c"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","ee4847ec2dee9139f8a038dd7a7a6ec8"],["/2019/01/07/cuda 手动配置/index.html","ce9f26a6f2a731171e2b31933d6aece9"],["/2019/01/07/docker-ldap-mysql/index.html","265c9f7a9f3fa5be157d5b49e58568d0"],["/2019/01/07/docker代理/index.html","fdeb90bc0e50b0cda4caa8aa1428f1f1"],["/2019/01/07/docker安装/index.html","970fdaa82514190369fbbbdfb9e34901"],["/2019/01/07/docker容器挂载硬盘/index.html","3550bf4ae5c5ca6c7a14d3cb79a7b263"],["/2019/01/07/github上传代码/index.html","14f6825cd33ff5c2f585c4c01c198099"],["/2019/01/07/kaldi 安装/index.html","b4da037244533eec2d38a352285c3001"],["/2019/01/07/linux常用工具/index.html","401c9d08b5989a797948d105d693b539"],["/2019/01/07/opencv/index.html","cb83512f1d6038d370104f0c36886bcf"],["/2019/01/07/ssh 远程连接docker/index.html","aa01357caf65f48936406bf52ce8dfd0"],["/2019/01/07/导出/index.html","95144be999c78306b1ee1d7e7c3a1d9b"],["/2019/01/07/换源/index.html","a70ca2c8223d4c90404346d98549f8b6"],["/2019/01/09/markdown/index.html","3545d0adc79167d6ac16b2d1af5d837b"],["/2019/01/09/opencv图像美化/index.html","e48079529d7c3ca8e48385581473d036"],["/2019/01/11/19单元语法/index.html","71b2d032967845890d9c5302bac60947"],["/2019/01/11/20单元语法/index.html","7af277f355d367a1bc9b5bff5e098b79"],["/2019/01/11/opencv-图片几何变换/index.html","27a00b279632a6b92b8be24ffc9f14f6"],["/2019/01/11/opencv-图片处理及绘图/index.html","c1e3c4e9168f5a6d4a8bc28af722d4a7"],["/2019/01/11/wine安装qq/index.html","554889cf151460dc0596fca53c3a5317"],["/2019/01/12/tensorflow-可视化/index.html","98085686f8f9d41e7959cf792825cb0c"],["/2019/01/12/tensorflow-基础语法/index.html","c085cee7dbe9d4f713c1baa6c7a8e519"],["/2019/01/13/RNN/index.html","e70fa2b582368ae22cbd5e0205e2aae7"],["/2019/01/13/keras实现CNN/index.html","b5948417c92e4e4b428ef69c74c3850e"],["/2019/01/13/卷积神经网络实现/index.html","b8084f4a4f98c1755b24e0f72ee10d0f"],["/2019/01/13/循环神经网络RNN-写诗/index.html","cc3094ac8db760ecf8a90db2a3cba4f5"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","01762ee99987d664f2871782f3845037"],["/2019/01/14/反向传播/index.html","cdad15942067b5afd90ebf1271333372"],["/2019/01/14/图床/index.html","4d054575d610da4a2908c48c5a777e52"],["/2019/01/14/感知器与激活函数/index.html","998ad0ab7d4971ebc387756c5481dd55"],["/2019/01/15/PIL简单应用/index.html","58bbab1c711565bbc527a8caea1ae399"],["/2019/01/15/卷积神经网络理论/index.html","a4c6b925b4eb9db38348b9f3bcf3a662"],["/2019/01/15/图片分类之pca-svc/index.html","a4f45ff44f0bad1774add2a87dba171a"],["/2019/01/15/强化学习基础/index.html","ca570ca34d0ad32a356d86f682c94d8e"],["/2019/01/15/经典神经网络/index.html","601a348e89691ef1a6ee0eb92295fa9e"],["/2019/01/16/DQN/index.html","3491ae5d6a62ef21c5e9a67e18c92e39"],["/2019/01/16/TCP传输图片/index.html","eac3c683a79fe5aade796955171e94f7"],["/2019/01/16/时序差分学习/index.html","d825ac4062644bc45eca1294942c547e"],["/2019/01/16/蒙特卡洛方法/index.html","51f67a077adcbc0fb4d430b92c4d7502"],["/2019/01/17/Double-QDN/index.html","cbf1c3170fcc4608d1de7cbc494ea6b3"],["/2019/01/17/RNN理论/index.html","90da84899a5bb09fbc170c8112702458"],["/2019/01/17/梯度下降/index.html","f29b465edb10189d358e25d94eded8dd"],["/2019/01/18/PG和TD3/index.html","0ecd2ffbb603b6168eeca4b09bce80ec"],["/2019/01/20/21单元语法/index.html","2331bb47c5cebf94f863355345641dfd"],["/2019/01/20/GAN理论/index.html","057051ab2dd0a2446df2143c733ac458"],["/2019/01/20/PG3和IRL/index.html","5491a90467e5f0bc509a74bbcdfb8d4e"],["/2019/01/20/数据集/index.html","7a82c4b642dceb98573af1e74cbb4498"],["/2019/01/21/DCGAN/index.html","d7866fa2bd2bc446faef240fbd1f8743"],["/2019/01/21/LSTM/index.html","31a684f95f2bbbe4ddc6cfc3977105d6"],["/2019/01/21/点击预估/index.html","0f66ee50034ac59711af483ed8095251"],["/2019/01/22/SVD分解/index.html","eb8b982a37fc703af286e70a937f2803"],["/2019/01/22/SVM/index.html","8eb13f581258574d392d078d55b62fc0"],["/2019/01/22/机器学习简介/index.html","512b26b5eda964ee78bfb8c73847c7c8"],["/2019/01/22/线性回归/index.html","cfb4397e93089e05da86b18a5d4df65b"],["/2019/01/22/逻辑回归/index.html","6fe2554e705410306125796ec7b2cb57"],["/2019/01/23/numpy/index.html","51a0cee642db8a76e9afdcdcc5043cf9"],["/2019/01/23/决策树与随机森林/index.html","53ad438e24a98bcee6b440995104b753"],["/2019/01/23/聚类/index.html","53bafd1a6a82bf7d51a74e50edf28341"],["/2019/01/24/matplotlib/index.html","f4b84ba379cedcd135c3672d25caf0f6"],["/2019/01/25/pandas/index.html","0e21e4be85c6193e4716e1af3103ab8f"],["/2019/01/25/语义分割/index.html","38243d2bff07782dc920858a462706ef"],["/2019/01/27/22单元语法/index.html","7087fd89a5500c5a683b96c07a661886"],["/2019/01/27/SVM案例/index.html","d40c8d1192147a1e0502e9ede43df58b"],["/2019/01/28/requests库及爬虫案例/index.html","b8dc5c180d014e4faf6f55193d16ffc5"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","d819244520bf51daf54cd3a4fcff863c"],["/2019/01/28/异常/index.html","0afd6a533be6af4205102427ca1ffce1"],["/2019/01/28/描述器和装饰器/index.html","443be1f5973c3cc6141c6713f0a31f72"],["/2019/01/28/文件/index.html","4b28de75324960c810435771a30beb03"],["/2019/01/28/正则/index.html","63b01b758a3ee771e9b00708652dc9f1"],["/2019/01/29/函数基础和函数参数/index.html","36058583dea4baa72ce4c78366be7b36"],["/2019/01/29/多继承和魔方方法/index.html","8021410bcae615be586a5d9170c929ce"],["/2019/01/29/类定义、属性和继承/index.html","92f3e073fc870db35c27aff3c1a631e8"],["/2019/02/27/23单元/index.html","ba09ea4e4ceae20e1714c175d8056416"],["/2019/03/12/hexo加速/index.html","e2b58ddd3eef7a41bbc3e4d35e9f4c9f"],["/2019/03/12/hexo系统重装恢复/index.html","c9b23889118baee7d77aa07038dad63b"],["/2019/03/13/24单元/index.html","0cd08481318899d8927f1047fbd9bc60"],["/2019/03/19/25单元/index.html","1d6dc81bf01952295d96fd5329e49b24"],["/2019/03/26/26单元/index.html","6ca0b6979e4b64e6f654a8b4f2d1b414"],["/2019/04/14/27单元/index.html","bdd373e17d33595bcc1d0c4720b70ec9"],["/2019/05/01/28单元/index.html","dfe8acc8f07eb771645309a9bb0278e3"],["/2019/05/02/29单元/index.html","588272413e616c2f5541ec2898a8aac1"],["/2019/05/12/30单元/index.html","e2b9e63744dd3fe51dbc6a5c6e212c4b"],["/2019/06/03/jni/index.html","80a049299eb09e75093498213fb00fce"],["/2019/06/07/JNA/index.html","be6ba1f71cc17c441db388bbbfbd5d05"],["/2022/08/07/R配置jupyter/index.html","0e840db50d662711a6358a54ab07e5cf"],["/2022/08/18/FFmpeg常用命令/index.html","5503538ac445e49998f8075a3fd4f50a"],["/2022/08/18/linux系统代理/index.html","fe835c9b4a9c17ed231191ac6bc7a850"],["/2022/08/18/matplotlib补充/index.html","7c07ef622a46390061edfa189f29e65c"],["/2022/08/18/常用命令/index.html","a575adaaefd5674c25136912e43c65bf"],["/2022/08/20/sacred/index.html","3f347fdf70d4632a558d5db88080d7ed"],["/2022/08/20/wsl/index.html","6ec931dcf9df8b920a638f39e27b2ea5"],["/2022/08/20/双系统安装/index.html","96dc9c2145ba1efc15f024caabf65893"],["/2023/06/28/source/index.html","6b538680cc92c0d33fc58defdb96e952"],["/archives/2018/12/index.html","c4398c1ccbda53ec746f63aef132e4d7"],["/archives/2018/index.html","64de1fc088562a3c22920d736cb4aac6"],["/archives/2019/01/index.html","5cbb1afd73387493ed85e78ad1d9d3d0"],["/archives/2019/01/page/2/index.html","2ad3bca5f9aac3f4d0d8d8f162bfeaba"],["/archives/2019/01/page/3/index.html","a671fb4a1e83fb05f06715d73d778d37"],["/archives/2019/01/page/4/index.html","39321727fde691e93e784d18a963721e"],["/archives/2019/01/page/5/index.html","8d2fc2ee1a35951957c590ab7966ce82"],["/archives/2019/01/page/6/index.html","56b163353e433b9f86fd334f95638cc1"],["/archives/2019/01/page/7/index.html","722c52c925b8c8c8dd97b73bd36e59e9"],["/archives/2019/01/page/8/index.html","64b14a711026f8b73f75a60954e43c90"],["/archives/2019/01/page/9/index.html","bab907a8c3d50282bb4abc10c87ddd34"],["/archives/2019/02/index.html","5c51fa3581e76e1a032531dc2cae2f16"],["/archives/2019/03/index.html","1bc2b95f89eabcce57c3665ef0019d0a"],["/archives/2019/04/index.html","2458c5f0dd6448dc02b35bf5e2105b87"],["/archives/2019/05/index.html","d375dd1ed46412389cd74b3d6883e499"],["/archives/2019/06/index.html","bef0af276cd3a8d26d93b5e15c41a032"],["/archives/2019/index.html","c1e16c7a5bbe1cf6d475177ed52248f0"],["/archives/2019/page/10/index.html","517932ef01c31770de2075ccdfbb9ffa"],["/archives/2019/page/2/index.html","6fea91a123711da2203af17db0a8aebd"],["/archives/2019/page/3/index.html","61d7098ba9ed31c841b4c2e431deb549"],["/archives/2019/page/4/index.html","4807e3ea7c7a6bf628a832f0c9936bbd"],["/archives/2019/page/5/index.html","fd44c1e396d6a301e470d9d60b4b7743"],["/archives/2019/page/6/index.html","f8358bff4f52b1e61a67bb1d16c1f846"],["/archives/2019/page/7/index.html","7c8900361d5a63fed41a84d279c2c974"],["/archives/2019/page/8/index.html","87d3375d09472d9b9ca0cb2344dbfef9"],["/archives/2019/page/9/index.html","5f9111cc767623ed226ebcb11a16a16a"],["/archives/2022/08/index.html","f5a7b6e5532eda03c7f98a1dbbe43197"],["/archives/2022/index.html","c788991f8b26e55e48fb8f7cc902295f"],["/archives/2023/06/index.html","7a4a6882ecd91918ef53bde92fd67e33"],["/archives/2023/index.html","d707c406687547df1fbe0b71d891d261"],["/archives/index.html","51cade74e2381d866a8c8e04745c9f13"],["/archives/page/10/index.html","0b87e88b0c8f26307d3bb7335cd2b579"],["/archives/page/11/index.html","bbff31ab39a6f0f36dca9843410225da"],["/archives/page/2/index.html","0f12b5390736fa4a2a52706d76970ac8"],["/archives/page/3/index.html","2edac00659088136f016b85a83c2e06e"],["/archives/page/4/index.html","4e9b0a32603af3f515c130eacdb8e680"],["/archives/page/5/index.html","c5c2bef52c3fc9c107cb029cfb8330e5"],["/archives/page/6/index.html","be617b6ff6c88666b7186ca978eed6d6"],["/archives/page/7/index.html","9bcf73c491ab7d8ad79888d6c68a81d7"],["/archives/page/8/index.html","493063b6ba5c5bcb64d90b63d5f33779"],["/archives/page/9/index.html","59f25741a1bfa4b60862342c72892d44"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","b00e872acd3f96cb36e1ab3df7c6cf17"],["/categories/dxz/index.html","b4df2d80fc7fe8d49eee89cfdcfb2f4b"],["/categories/index.html","6dc56c76a850d1c1875993660fc65b34"],["/categories/java调用C/index.html","8e22fd96407f463c7f0daca4ee218415"],["/categories/linux/index.html","e759a1f2ac8b2999b1fe53ae1ad529a2"],["/categories/linux/page/2/index.html","6308e0c54215a799c06470a01727c501"],["/categories/python/index.html","a2adda8c161ebfb2189553aca8c0c7ed"],["/categories/tensorflow/index.html","39a297d51bba79d1b58cd3ff3c8f2b3f"],["/categories/优化算法/index.html","b5b958fd6d5aa62abf0c9e09c9bc243a"],["/categories/图片分类/index.html","41c6fa442fc610c2eb1a64816956ad8e"],["/categories/工具/index.html","42f6077f913e93c59ef805da1b24fa8b"],["/categories/工具/page/2/index.html","f8446a72b0dcfcc0f279a25b6574aa37"],["/categories/强化学习/index.html","709cbd2df78096b04bdbd27a7dd06e67"],["/categories/数据集/index.html","b2f09c2b198163788a6a80d4d78893b1"],["/categories/日语/index.html","9d765f6553f9c4d54c31b01e3d99fe81"],["/categories/日语/page/2/index.html","441980900adbbc85027a4646bb380a4f"],["/categories/机器学习/index.html","a3f6c2af9b9e4c044438ef10d69affa6"],["/categories/深度学习/index.html","a3cf3c0eca4f8dd0cfc4267a0714dbd9"],["/categories/深度学习/page/2/index.html","c30affc83fbae96a5d2fc9edccef5843"],["/categories/计算机视觉/index.html","84eb39f8aa10935cde9e019947d4a53c"],["/categories/读书笔记/index.html","f4eddf912fd32712d8bad464bdbad211"],["/css/main.css","547cfce79b9ee15438fa458c17388105"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6099d6eb9ecb314437becc28d089f864"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","f957fb5652d57059f75a618fc5d122b1"],["/page/11/index.html","20392c7facbc89bbe9c066a7ba862f59"],["/page/2/index.html","d00810a1942c3c861b27e81cad8838a8"],["/page/3/index.html","a200768fe472083855e624d25a40d384"],["/page/4/index.html","9377b1541a616a09429764f2eadf2498"],["/page/5/index.html","0f6e6482a8c58e4ed20aed4f736eca4a"],["/page/6/index.html","3c1f289aa336a5a7885550c80979fc23"],["/page/7/index.html","cbed89299d48c071059e491180e6ae8a"],["/page/8/index.html","3d361a3e9127cd56934ba286b71dbbe7"],["/page/9/index.html","c5a0de254f343f753c932c6db9a78558"],["/sw-register.js","09e807c331887062a27a88c099c411f1"],["/tags/AlexNet/index.html","65928edac613a0a4bc83ace429f2bba4"],["/tags/CNN/index.html","c3505f6dcad346d69b1165fcaf3aa01d"],["/tags/DCGAN/index.html","1e94b414ecbfb491eb4a54cd275f538b"],["/tags/DDPG/index.html","84b237bca088a518ac0bc72026564b12"],["/tags/DDQN/index.html","ca37ce5833e88ce1d3c4902bd3010525"],["/tags/DQN/index.html","f96e4298ec6da35f3c6f27162170deb2"],["/tags/GAN/index.html","40633ab4d36a4a9bb3e57f16c74710c7"],["/tags/IRL/index.html","9838d5d2c6130e01909c078214d7b5e2"],["/tags/LSTM/index.html","0885c6e3acdc1c0ce361800cb15956b9"],["/tags/LeNet/index.html","f67435a7f8b6c7b23c5ec712d9e9de73"],["/tags/MC/index.html","876febb17a1e6cf23e2fdaeb5ef50dc7"],["/tags/PCA/index.html","0f1c99216661af919547cf20a10bd0dd"],["/tags/PG/index.html","2bfe4a6047baebb80296346b08d2ba2c"],["/tags/PG3/index.html","3895d1cea6ea4fec30268834fd412794"],["/tags/PIL/index.html","703862994beda2c7d5627873394acfdb"],["/tags/R/index.html","112aff988555a21f1222649f7989df41"],["/tags/RNN/index.html","8c20ac60c7b76a9a45b0def7571968e1"],["/tags/SVC/index.html","6a4b0403c24ecd9cc1979171b8d4ffa2"],["/tags/SVD/index.html","db9b2188b17dcbd57901d83b435b6045"],["/tags/SVM/index.html","d403fc382b6999cb39655fc724ee7943"],["/tags/TCP/index.html","653c38528a90835717eb61be693791f4"],["/tags/TD/index.html","81b6b9dc00c55c0c1daa52889ea648ff"],["/tags/TD3/index.html","3bcc31f99e0e8b522c295c804d04391a"],["/tags/VGG/index.html","439a29f0ba3ce0f65099252e9add63b3"],["/tags/amd配置/index.html","152bc204874882b0181b9ccc51be07aa"],["/tags/anconda/index.html","6a43b3afb143cd2ed145bd6a3c6d19d4"],["/tags/conda常用命令/index.html","ee4ee0cded20fab96c62e425aa843691"],["/tags/cuda配置/index.html","7f0b2fd50f43123d303af1dd21d3a7b5"],["/tags/docker-ldap-mysql/index.html","11f8a8b705499e18febc54aeea3d0a3d"],["/tags/docker代理/index.html","370f666e1b8fd42545ba939ca4c2cd61"],["/tags/docker安装/index.html","04f3833db9cbd9e9adbbc7e7d62fa1f7"],["/tags/docker容器挂载硬盘/index.html","e74d7fe7bdbb869143c574457e6a8055"],["/tags/ffmpeg/index.html","716401b53eefacb0718c10a2cee383af"],["/tags/github上传代码/index.html","cc6c40f3511f1a04ca767a7c2c57d641"],["/tags/hexo/index.html","08add23e98dc90ac230f432cc14ebc2f"],["/tags/index.html","3e1e8c03779f2b5123d05b1710383228"],["/tags/java调用C/index.html","1c43e5453872684d0af7e0ba9105f073"],["/tags/kaldi/index.html","8bc6c52ae977c76df061670eec94f12d"],["/tags/linux命令/index.html","484b1e26ed934ba633875ce9a81bd203"],["/tags/markdown/index.html","a1b2f963c88e1ffb8be66f097f8c6cf5"],["/tags/matplotlib/index.html","c05c9aa2d14ba2154e5c9e208330fd22"],["/tags/numpy/index.html","ef4635aa5ad1a91f60d6962b310cc4be"],["/tags/opencv/index.html","17415b9f59b735dde9ff13c39399876d"],["/tags/pandas/index.html","bcaff601e0d1d7d2530858c651cb1d74"],["/tags/qq/index.html","3ba73848acd8081c1fae0105d23b90ec"],["/tags/requests库/index.html","b636d01f45d5ef0f766542bc56221e93"],["/tags/sacred/index.html","65a9f92142565b78553195a116d67b43"],["/tags/ssh-远程连接docker/index.html","9f337517ec492c9234fa2d9a18c044e0"],["/tags/wsl/index.html","b6ac00f03b5ce18bf95eff8e78012ad4"],["/tags/zsh/index.html","f2495778b64f0f8a7d900e9d0638ab0e"],["/tags/代理/index.html","421cb30136b2cb5113cb9cd642868b74"],["/tags/决策树/index.html","d8bd3e01af04590b7f71fabc05d9ed93"],["/tags/函数/index.html","afa2705bc413672805c3974a793f06eb"],["/tags/列表推导式/index.html","42bcdb7b0e6620629dc03c20a9249959"],["/tags/助词/index.html","f066c20788165937dc27ab1d38fc9ca3"],["/tags/包/index.html","57e204162dbeedf982c0905ada964d06"],["/tags/卷积神经网络/index.html","da4b3fc70111e02c4a668cc15eede1c7"],["/tags/双系统安装/index.html","4593a2623942229f8118c85d892f1881"],["/tags/反向传播/index.html","93e2a5ee63efc5fa53f7a08cba527ff6"],["/tags/句型/index.html","f35b2fd3d07a7c96a0574d2cc86c20c7"],["/tags/可视化/index.html","0b7962368c11a123231aea105d750466"],["/tags/哲学/index.html","fe4f56619c9c512e883a2292cf644002"],["/tags/图像美化/index.html","37405fc81d48426a2da88544e06db8a8"],["/tags/图床/index.html","a26764d2a7eff4990e3642cf934fdde5"],["/tags/多继承/index.html","ebe5da0763399011c5b66ecb8ee629f9"],["/tags/工具/index.html","49bf2f89ceeae626c2bf664c00462275"],["/tags/异常/index.html","331f2da0238148551c5ce1ae29e35441"],["/tags/强化学习/index.html","283367ac07c5aa569efefd107b5ac5fe"],["/tags/心理学/index.html","51a25599f0d34607cb1488328e2c4bee"],["/tags/感知器/index.html","88b623d1c30c9f80bf7b1b7b4701c176"],["/tags/换源/index.html","116e71c6353957bf220d38677de0e84b"],["/tags/描述器/index.html","1bcabbf9a95119bc56962d0bedf9d97b"],["/tags/敬语/index.html","01a58f2c726a8e70ce84f204120619a2"],["/tags/数据集/index.html","846bd2e2b4ff1058ffac38908fa793d5"],["/tags/文件/index.html","23631e6aab3407195e025a29deff012a"],["/tags/机器学习/index.html","743e05628dff833bee3bf10f7857a749"],["/tags/梯度下降/index.html","f6a7cefc351708c9eee2b9f51f5704a2"],["/tags/模块/index.html","841b7f7986c69b462460873096bd3526"],["/tags/正则/index.html","4b4cd8c52980762faec2cd17fa56a0a8"],["/tags/激活函数/index.html","1f54faba73ada5186b6b0dfef97780b9"],["/tags/点击预估/index.html","044981be95a168de5e5da582e7612c9a"],["/tags/爬虫/index.html","5323a21c2797d51e1935aaeec59f8c4a"],["/tags/生成器/index.html","bf86c6ea8c0eaf42afa20824810a2ad1"],["/tags/类/index.html","21fdfa0a9f51d522331618d6536402a2"],["/tags/线性回归/index.html","45b5a48390565e8d4058590eea54209c"],["/tags/经济学/index.html","8198660851b2a85ec2063d2649528e67"],["/tags/聚类/index.html","01e5b77de2ad7988d6d18c2bda35b3ca"],["/tags/装饰器/index.html","9eb481b9f5b3d001779c8cc7cbcf9007"],["/tags/词型变换/index.html","b696c82776b15a4a188de0486b616a22"],["/tags/语义分割/index.html","e9300f117b688355867859ec22d06eaa"],["/tags/语法/index.html","06799bf8a125ce9ffc0870d1e4c7760f"],["/tags/语法/page/2/index.html","4384170143e0b8401409f43505524a0d"],["/tags/迭代器/index.html","5a02a24be6ad35ed510cfd2610968ba7"],["/tags/逻辑回归/index.html","7b2db1c2201859b321b18a2c2ba1f937"],["/tags/随机森林/index.html","864fec5a4873a66730c480f94bb010d9"],["/tags/魔方方法/index.html","b8ff844876bf46da94762fc73bcb55fe"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
