/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","256ff1fc84d28890311125ba176f9a33"],["/2019/01/02/Anconda常用命令总结/index.html","00ca8fd942de3a270460a2dbe6d65df6"],["/2019/01/02/句型/index.html","0e8b12e898061eb4fa3fa08dc34ed228"],["/2019/01/02/日语助词/index.html","8189b8a3ed28b95dd62082884d99e48e"],["/2019/01/03/on-my-zsh/index.html","c86108c7cfbd2b64beb9b4653a893383"],["/2019/01/04/《当我遇见一个人》摘录/index.html","63a636f3f318a1cd306c36343e6d2155"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","ba1acbfe58adcb50f3b18356d6edec33"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","faead0287b1fb738a481e01953bcf1ce"],["/2019/01/04/经济学笔记/index.html","7eda873be6c27b19549a146e2ffea9f1"],["/2019/01/04/语法总结（5-15）/index.html","7da531dbc4ccb117423190c3730396be"],["/2019/01/05/linux常用命令/index.html","46c8a6d803650590c6f706b7728db77a"],["/2019/01/05/mamba/index.html","c29974274248796351cf20826dbb4303"],["/2019/01/05/onnx2tflite/index.html","993141b0353f0dedb485bc4f9d8ce2e7"],["/2019/01/05/torch安装/index.html","f547d96be8135436e7c1bcc1b11b4f97"],["/2019/01/05/vscode/index.html","39c1c07a9a2d305e40ab00e65d111fd5"],["/2019/01/06/敬语/index.html","c678686338f9db61debf0c83e36a8627"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","2d64950b685c65771bf7bb17a07b4ae5"],["/2019/01/07/cuda 手动配置/index.html","401b68ac14fa8ba98d2f6eafb4d2d0c2"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","398dce48bb120eb1f9047ecb8d98bdca"],["/2019/01/07/docker-ldap-mysql/index.html","e96d73415f526fdb72e6ad014f716c27"],["/2019/01/07/docker代理/index.html","d04423e31614341cc69d8f2fd9a3f864"],["/2019/01/07/docker安装/index.html","20606d6687e10f7cfe25bc08fcc0f69a"],["/2019/01/07/docker容器挂载硬盘/index.html","d4444ae588c58db118d8738d3736ca8b"],["/2019/01/07/github上传代码/index.html","7c2598798a95db184553a7d579dc4c99"],["/2019/01/07/kaldi 安装/index.html","58c71a6d938a2ec82a87da59ddd0eb7f"],["/2019/01/07/linux常用工具/index.html","54b4b9c17a2f2d6016af15049d4ab27a"],["/2019/01/07/opencv/index.html","8e5e4bf47f60a4d7fe75a5869b8780f9"],["/2019/01/07/ssh 远程连接docker/index.html","4c668297d247875bffbbf5bde96e01cd"],["/2019/01/07/导出/index.html","29188747713e1cb0c73d32c0a8c5d4f1"],["/2019/01/07/换源/index.html","a5718f6c39b451a1325e8933ccd5a2f6"],["/2019/01/07/服务器配置LDAP/index.html","51b9976f96d7bc67891dc2531aaa3a1a"],["/2019/01/09/markdown/index.html","2473dd140cca2d5e34296d9484d3f440"],["/2019/01/09/opencv图像美化/index.html","913b5a7f9bb321da00d3177b65a78101"],["/2019/01/11/19单元语法/index.html","85b9f46dfe4265a0249083b25d98b9fd"],["/2019/01/11/20单元语法/index.html","ff80f54dc34bfb459cd0f1e18da83bac"],["/2019/01/11/opencv-图片几何变换/index.html","1bb319ba066151515b9dc51ff13da3ab"],["/2019/01/11/opencv-图片处理及绘图/index.html","e75f6be2db6f4ad9e361085303a7f400"],["/2019/01/11/wine安装qq/index.html","4f6f5b90c70fb7b5ebaa9715a18feb93"],["/2019/01/12/tensorflow-可视化/index.html","c1b15c0bb9b8dab10b5baefb87049947"],["/2019/01/12/tensorflow-基础语法/index.html","e021bfb8a5cbe4dc15ba6db58a820365"],["/2019/01/13/RNN/index.html","468c242ecbae6f6cf55e1557cf192231"],["/2019/01/13/keras实现CNN/index.html","78a6b48f1a5462193282d42e562d207a"],["/2019/01/13/卷积神经网络实现/index.html","ec99b47da971f875f1d3531045149071"],["/2019/01/13/循环神经网络RNN-写诗/index.html","4758650166b2c5599a078dfff4c829a7"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","c65407d04f1912712b4c8db1ef8e7091"],["/2019/01/14/反向传播/index.html","46f514767f62098aa99fe6be8c78fdbd"],["/2019/01/14/图床/index.html","3ac9193184ba471488362345c8c3aaf6"],["/2019/01/14/感知器与激活函数/index.html","036061ab0bd1f84ac894134ee007f8b7"],["/2019/01/15/PIL简单应用/index.html","5bd1f152cb1e4f722367a2fd09bf05fc"],["/2019/01/15/卷积神经网络理论/index.html","db5caf53f74c4b6fb085cb34bf3ba797"],["/2019/01/15/图片分类之pca-svc/index.html","f6a333f729d37997658ffaa5dd98f90a"],["/2019/01/15/强化学习基础/index.html","19f912678149072bbdfc583fdb3a6ece"],["/2019/01/15/经典神经网络/index.html","4ad8f0662dbdb968c38b18d8365676db"],["/2019/01/16/DQN/index.html","7212bc5a7857c9ac2487be72df3fbb93"],["/2019/01/16/TCP传输图片/index.html","729b4879b3daf03f196f0a379f6f61c2"],["/2019/01/16/时序差分学习/index.html","02f74e73c8c35371c0f17bcdd9a77241"],["/2019/01/16/蒙特卡洛方法/index.html","62ea4a845c3e0607bb698d71d01ba9c2"],["/2019/01/17/Double-QDN/index.html","bb861625756a6631adf253cd1572323e"],["/2019/01/17/RNN理论/index.html","4cafd01dfceb646c7139040cb74c8dd9"],["/2019/01/17/梯度下降/index.html","b50347ebcde0940d5b67bf6bdd096744"],["/2019/01/18/PG和TD3/index.html","df27a43cec0413b2d8566c875e72a738"],["/2019/01/20/21单元语法/index.html","158cef8b4a5684832245a1d9da58c4ea"],["/2019/01/20/GAN理论/index.html","206e29c43cd877a4d4fd9d249b63958a"],["/2019/01/20/PG3和IRL/index.html","a88a964b8c38958324126fb47401beee"],["/2019/01/20/数据集/index.html","e7841494fb0a32ecabf31ee22211198f"],["/2019/01/21/DCGAN/index.html","85041902ba435dd8388a99c3ded32a94"],["/2019/01/21/LSTM/index.html","d32fa99df9b608c158ca15ef5b4d3907"],["/2019/01/21/点击预估/index.html","97b3b06d0581a4699d2607936b1aac89"],["/2019/01/22/SVD分解/index.html","f28aba4aa998f8937bd0a27dbf5efdb4"],["/2019/01/22/SVM/index.html","efbbd9f8fe45a6b53cb36183960ec973"],["/2019/01/22/机器学习简介/index.html","8efca7753fc8c5bb8713f69d0cc55c6f"],["/2019/01/22/线性回归/index.html","9b25bdd05443fdc1e150f7ea646fe03e"],["/2019/01/22/逻辑回归/index.html","4eb417935232401301f9addd12e94055"],["/2019/01/23/numpy/index.html","cfeb745d53bf3216e4c0f4c1c3930236"],["/2019/01/23/决策树与随机森林/index.html","a92866452356981346352f61cb909227"],["/2019/01/23/聚类/index.html","44330f6f6e3172ef9f6393ee5f4b28ae"],["/2019/01/24/matplotlib/index.html","0ed98e0b3485e079e16c23b6dfaf14b7"],["/2019/01/25/pandas/index.html","a4a8e69c6463fb45c750f7b679671c6f"],["/2019/01/25/语义分割/index.html","f1de6b90fcf4b90801133c0f6a86f017"],["/2019/01/27/22单元语法/index.html","fa7002fab420247f3b6ae2ece0cb2b3a"],["/2019/01/27/SVM案例/index.html","5501d052a41a2c6b7e1c2a18e77c4101"],["/2019/01/28/requests库及爬虫案例/index.html","7610f397743b372d2919968dd50c5eed"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","310c75e09259154a57e20f6ea6fed5cd"],["/2019/01/28/异常/index.html","9ec1cc64e92e85663f7e286e364602a4"],["/2019/01/28/描述器和装饰器/index.html","9cbb2a213a42ad363ea831ae8c638e6c"],["/2019/01/28/文件/index.html","3ff30db06aba28856c588bcd48d0d6e9"],["/2019/01/28/正则/index.html","1b61f6dc390e691f682bb2561c8c6941"],["/2019/01/29/函数基础和函数参数/index.html","23b5c8879be147ca7dadd25268bfa7b2"],["/2019/01/29/多继承和魔方方法/index.html","5f9654885c8312c1178c7f6fc62ecf3e"],["/2019/01/29/类定义、属性和继承/index.html","14726ac3d448e17ce5911b94997f3db3"],["/2019/02/27/23单元/index.html","1aba1b0317a6c023a15c305c9b2d8623"],["/2019/03/12/hexo加速/index.html","26d82d97acb4e80094a99b9dac94b29c"],["/2019/03/12/hexo系统重装恢复/index.html","fc24ec6e15b44b1ed0dd6e82264c8054"],["/2019/03/13/24单元/index.html","69d849770c53d5fd38ff80bdfe114484"],["/2019/03/19/25单元/index.html","1356961f58a982b48ed1326faf93821c"],["/2019/03/26/26单元/index.html","752f198db35bc10e4ac2e1d1f41724a5"],["/2019/04/14/27单元/index.html","ea06c38b036fae51bb57b868bd19db2b"],["/2019/05/01/28单元/index.html","4f9b9b19f7d57bb68602183f01b12421"],["/2019/05/02/29单元/index.html","6c14d31ad2230d382ad0bb410cb34050"],["/2019/05/12/30单元/index.html","ce5db7f1a6b63dfdca41144c6fb2d18f"],["/2019/06/03/jni/index.html","2d377aa6ff7d1c7709860e08fb619c5b"],["/2019/06/07/JNA/index.html","dd3e7c3f6bfc4dd566d1829281ef1f06"],["/2022/08/07/R配置jupyter/index.html","eb5c25195f85155fbccc265fd6cbd460"],["/2022/08/18/FFmpeg常用命令/index.html","b6cef007c0f544858fee8864fd99bfbd"],["/2022/08/18/linux系统代理/index.html","6027d4674bad31b1b3dff4e0be462558"],["/2022/08/18/matplotlib补充/index.html","ad1fe80855c0fd40150e8a13848b346c"],["/2022/08/18/常用命令/index.html","db07f967f583aa37d0a3db13d375764d"],["/2022/08/20/sacred/index.html","2b2939aa4fac976a8dd500664e8cb2c5"],["/2022/08/20/wsl/index.html","e9d83ad911223ccfe52ad431a9111482"],["/2022/08/20/双系统安装/index.html","36951752ed814f34c3cf9f3f0ecd4189"],["/2023/06/28/source/index.html","03cfdd4ad3016c18ce08a6152754b834"],["/archives/2018/12/index.html","bb5e588b914119591ff1c4ba0c5ab7a8"],["/archives/2018/index.html","1b39acf3522acc75fe9a57f866e9c9de"],["/archives/2019/01/index.html","da5b5c71a4e99435c2b92a8126566532"],["/archives/2019/01/page/2/index.html","4e6558e6303af2d69e3430b3351d820a"],["/archives/2019/01/page/3/index.html","3c0d9f558fe80a65b6ba5655798cbce9"],["/archives/2019/01/page/4/index.html","f9fd6638106fd9f451453dfa536c237c"],["/archives/2019/01/page/5/index.html","5b559df05ed7c9c26beb3cf8ef55f6f7"],["/archives/2019/01/page/6/index.html","17ccc33070feb66929b76e2d0728f0d4"],["/archives/2019/01/page/7/index.html","5c8c3ea4e374a01b903f56174d3deed0"],["/archives/2019/01/page/8/index.html","f94528d52d9e0180f5f2c8d7966b3710"],["/archives/2019/01/page/9/index.html","84302c3921247837d360957a513426d3"],["/archives/2019/02/index.html","1e2b179ff4b8774859e4df8068656c81"],["/archives/2019/03/index.html","4f206ed291fd15adedddeacc67aaeacf"],["/archives/2019/04/index.html","e3cefe12cd0e0ddd2b2ab2cb8db72d40"],["/archives/2019/05/index.html","1b75d9de1ebe23979c777b893740f116"],["/archives/2019/06/index.html","bfa876c89363b3beed1155833cb62db9"],["/archives/2019/index.html","3885dbc1b5e95ca3749b0d21bdf4af3f"],["/archives/2019/page/10/index.html","b3fff4cb1d8e4cf00f0221a7345d53a7"],["/archives/2019/page/11/index.html","96953ccfa7cf2b79d349b5d4096b3a7f"],["/archives/2019/page/2/index.html","10e87ae3e7e1ffdc72ebfe275d63bb70"],["/archives/2019/page/3/index.html","0e4071ad1e7027fc82f2ce426f8fe408"],["/archives/2019/page/4/index.html","11fdca61b47bd69bd43691ced5210746"],["/archives/2019/page/5/index.html","3d323562021988940701ed8465a22c93"],["/archives/2019/page/6/index.html","6cde498456447d62f3fd9c91705bf053"],["/archives/2019/page/7/index.html","90694aab83e20fefce781ddc63322369"],["/archives/2019/page/8/index.html","0e9b5900d22738c434ea1d0c216484d7"],["/archives/2019/page/9/index.html","5666452d239c7b787f7eefb47b34993c"],["/archives/2022/08/index.html","50cec7a20536e5da0e3ea42048609e4b"],["/archives/2022/index.html","9fff2814c2a96d91171bc7a07a27477c"],["/archives/2023/06/index.html","aba48a4497528d09a8152df44bdb989e"],["/archives/2023/index.html","813d57c29c18e7a818f819efb5356d84"],["/archives/index.html","bc0c6c75b65682759e79440603770b54"],["/archives/page/10/index.html","4c4f1df15b47973f9f3a65cb74e980f5"],["/archives/page/11/index.html","d6a2846879f153ee996ff87b636f0e8f"],["/archives/page/12/index.html","3c1c028b83ec2edbd34f96afff9e7092"],["/archives/page/2/index.html","bb5cecc76b616b1718e1184834fcae68"],["/archives/page/3/index.html","03275d77cbc702a7a401feae578e4815"],["/archives/page/4/index.html","96f4e3f7d615ed183d7a58b3d09f3e65"],["/archives/page/5/index.html","451ca9ee23afe05430611f4a893abfaa"],["/archives/page/6/index.html","b2cf4645630baaaf7ae4e6ac231a186a"],["/archives/page/7/index.html","1ccd31987ed8a451122558290360b223"],["/archives/page/8/index.html","71bb9b9cd240de3530eed36521889af2"],["/archives/page/9/index.html","e1ffeeca9e56369fd95f5478347ed4b8"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","2f398630c496d31878c524decb9ee64d"],["/categories/dxz/index.html","3ce12155220f35e8c53070b4acf5f6fa"],["/categories/index.html","96952f1045067885307df7681e63ea30"],["/categories/linux/index.html","6c02244def6e5b592fb724abfbfd7000"],["/categories/python/index.html","8268b12ef0e856c27ee71ba2a4d9a992"],["/categories/tensorflow/index.html","e4f1a40c4852aaeb7826cfea41db57e8"],["/categories/图片分类/index.html","d10aaf36e40989b324c66e0d64252ea3"],["/categories/工具/index.html","9c1da575bd42f01b9d1c2eb1bb8eb5c2"],["/categories/工具/page/2/index.html","0bd8a1d70e033a55a2e2efd0f792837f"],["/categories/强化学习/index.html","0d653eae4db731b0fec89983008e27cd"],["/categories/数据集/index.html","3e0cf98919bff1d0c0778891a7214c0c"],["/categories/日语/index.html","954bc9aee52e218de05d0b84badd1b6b"],["/categories/日语/page/2/index.html","07161ebd7eb55afbe2f76e68580a4f80"],["/categories/机器学习/index.html","048fd0ece4843bdf16bf3e0e87f63129"],["/categories/深度学习/index.html","da3344c6b36346ee14c1be203acbaac6"],["/categories/深度学习/page/2/index.html","a0cb4124c160563f817cb98a854456a3"],["/categories/深度学习环境配置/index.html","23860c81b7832f58bfd7fca5a0954b32"],["/categories/深度学习移植/index.html","a704e5b3ef36141594559e63b2c0e3df"],["/categories/计算机视觉/index.html","5d073038119044d06ce3c85ab326e298"],["/categories/读书笔记/index.html","9848aa64056385cac4491536f7f1e9f6"],["/css/main.css","92c7782ce1082439a8cd7c49a864fda8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","bfb2e79909885e309bd65cdafb8758cc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","3b3eb41d4674d11f5ad04150ef4c2e45"],["/page/11/index.html","bf5b7a911919061bb786971f5ea5faad"],["/page/12/index.html","95fc14cee9bae6e1be27fdde29d3062c"],["/page/2/index.html","a2fe2d1fd28299acb8d022afbdc695b8"],["/page/3/index.html","a935765e2791c870274c46c259950058"],["/page/4/index.html","9a32e731ae1ad6ff3408b3a9912402eb"],["/page/5/index.html","d008ecd96989e03f6b707f47db75da22"],["/page/6/index.html","b8220ec1ac0dac28f4f12b875c6cb1d4"],["/page/7/index.html","cd7688125be7d2616d8bc8d8c1c9df1b"],["/page/8/index.html","c8afc65b1d3d51ed2469dd2e3486ded3"],["/page/9/index.html","a4c393d4b48b8db338f02fb938ac8c62"],["/sw-register.js","f223ce981f689e8cab380285b4f0df01"],["/tags/AlexNet/index.html","f95f4a05cae982ecfcbec7dbe7ca5599"],["/tags/CNN/index.html","96eb86f3367713f0e3c7c159c7826609"],["/tags/DCGAN/index.html","0deaa0aab614db1875fa12bd758bb985"],["/tags/DDPG/index.html","bb7cde94b1b15422922d353f5e479518"],["/tags/DDQN/index.html","842fe8ad2710a6f6ac2d887de9142050"],["/tags/DQN/index.html","307912f0307f57b0191316fe706c3362"],["/tags/GAN/index.html","03339b67edd3c147fe7adbebf6f8938c"],["/tags/IRL/index.html","d87bee1813ca463ee078bfa9b3310324"],["/tags/LSTM/index.html","37345d0b9ff0ebc539355e4816a10e98"],["/tags/LeNet/index.html","31eb8d3db1d99837381831d6c9f91c54"],["/tags/MC/index.html","e15920cc9c3425c0f59102c7e6d9d593"],["/tags/PCA/index.html","2eefe9446b01103f69e42919c7292121"],["/tags/PG/index.html","256f43b95e91f22f6d81c160b89ab45a"],["/tags/PG3/index.html","2028cb26a7f4877d8a6092ad4cb7bb75"],["/tags/PIL/index.html","50ad3869c8c8054b3b63d7828b8bfced"],["/tags/R/index.html","7964dd3435d1dd20885df38b91240a4c"],["/tags/RNN/index.html","12c04873aa5d5527a43db77c5283f614"],["/tags/SVC/index.html","543d8d9709f6ed550fbc27372687c398"],["/tags/SVD/index.html","d75185d2cb163ff7d6e65075e395b20f"],["/tags/SVM/index.html","bdf8f4f59718541d9a04b8e71c8fbaa9"],["/tags/TCP/index.html","4d715008191262e1efae86dccc1ac7d4"],["/tags/TD/index.html","27c404130cd61dc6738709bb21c01477"],["/tags/TD3/index.html","160d614830e7e70333afe0e24fa17e94"],["/tags/VGG/index.html","3656b26077d38224bf15216b1b9f22c1"],["/tags/amd配置/index.html","f4e61af44f01aa47a30044371b63aa25"],["/tags/anconda/index.html","475e17515ce7fddde1b5631fcd8d1301"],["/tags/conda常用命令/index.html","72805a5077e60ebaba13e99ffc232930"],["/tags/cuda配置/index.html","8df5d09d590d5b3a72d0528784cf0afc"],["/tags/docker-ldap-mysql-arm64/index.html","3afdf2554d37c78c53c00ff8ff294ed5"],["/tags/docker-ldap-mysql/index.html","f9176356dd9113fa60206b62ad1083d2"],["/tags/docker代理/index.html","e9737b16d5af10db66c1d124760f6e35"],["/tags/docker安装/index.html","856f5504b58b8fd7446e49bb8286326a"],["/tags/docker容器挂载硬盘/index.html","94982a416967ecc761a3c494c00fb7dd"],["/tags/ffmpeg/index.html","33852d91142f566a8797bc01bff30631"],["/tags/github上传代码/index.html","80259d14d3aeb8a19a49908965a2e7c1"],["/tags/hexo/index.html","b79057b928e42a0439b9bf32f661187f"],["/tags/index.html","0173ed3176e4c29999be22d54ad901e9"],["/tags/java调用C/index.html","2f61cf25bf2f38e22954a47e6285605d"],["/tags/kaldi/index.html","448cd174c3f234a537e75f10541d76a6"],["/tags/linux命令/index.html","6a42d59b085df40a5073dd8a085fdf5f"],["/tags/mamba/index.html","37c378263300864bc8eb9f74e71833e5"],["/tags/markdown/index.html","065f894c23fe126789c922ffbf4a9d64"],["/tags/matplotlib/index.html","71dbda58bf8be200e9b0e31f91072dee"],["/tags/numpy/index.html","c88e9677252ab4d0340a4b4b406f9849"],["/tags/onnx2tflite/index.html","3c1514ebead565ab9cd06bc0633ddaae"],["/tags/opencv/index.html","bff508a817d5f94a729913980cc9e2d0"],["/tags/pandas/index.html","40603e146a13bc9496eee588dada6714"],["/tags/qq/index.html","8e60a2949bf89adef414c2d91a6a47ce"],["/tags/requests库/index.html","f6dbf2245e392e62d25a08d8a83e940a"],["/tags/sacred/index.html","98844c6cac60b6d385a6959268a1374d"],["/tags/ssh-远程连接docker/index.html","55273ed6b028f5e990b2f7ed200ce017"],["/tags/torch和apex安装/index.html","8b4844063c8df1e3675fcecff6530366"],["/tags/vscode/index.html","32b33b5042994b27d4b6b51948666a9d"],["/tags/wsl/index.html","1379f7b96394260723a2d76150871f67"],["/tags/zsh/index.html","e772e13978999dfca94731b93c86b951"],["/tags/代理/index.html","88e5dc1f2b4ba86a125f284eb08389ed"],["/tags/决策树/index.html","64e2fd1a71f1ada9d86185c93a4a85fd"],["/tags/函数/index.html","b23d02a9c1a0f52aec2f8d3accd652e0"],["/tags/列表推导式/index.html","56bd299f0c0e100a26468f61a491abb2"],["/tags/助词/index.html","9f0ef4a584dd403ca626a75708a7e43b"],["/tags/包/index.html","a049c151c02e224de818ebe5078f284f"],["/tags/卷积神经网络/index.html","1d4443d9dbc24298dd35346f8b92701f"],["/tags/双系统安装/index.html","b95c5bd91b63a2e4ca99912ccdfc9451"],["/tags/反向传播/index.html","9c6635886add31825ea8947547939c14"],["/tags/句型/index.html","341b5c55d9f2e72443e59fea17e4ce3e"],["/tags/可视化/index.html","b91741fee872153f6ad3153229aa8dbf"],["/tags/哲学/index.html","4b36ed7c6c76dd01a1001e7049a2a04b"],["/tags/图像美化/index.html","3c2d27feef302dc936b6ab14527e4456"],["/tags/图床/index.html","b4acfbed321fd397661fb371bf33b0cb"],["/tags/多继承/index.html","0317578c4f1d3f0bc7ec3432919c9447"],["/tags/工具/index.html","2f79947149dcec4fef34ecfbfe12701e"],["/tags/异常/index.html","0337e6ad6ecc5adf492fb637505dc415"],["/tags/强化学习/index.html","a14111206e262240bb4f870f18c62fbf"],["/tags/心理学/index.html","c587fb2dcfa4e4a149f643a9496702af"],["/tags/感知器/index.html","69d68cd863924f5fcc75b00fde3253b0"],["/tags/换源/index.html","a7bdbe6609bc8338ffd8413869c40521"],["/tags/描述器/index.html","848352d91cc56b59a2c7dad0e7cc26d9"],["/tags/敬语/index.html","bbf846d22de74ec104bbfd9c843a37e2"],["/tags/数据集/index.html","8aa257f5b266bda0f9437b46b0ea5c9a"],["/tags/文件/index.html","48631a119670b7d7a2cd6d7ce475ccd3"],["/tags/服务器配置LDAP/index.html","89264c6b4cb279c222f81ca705fa7981"],["/tags/机器学习/index.html","a5e4fe6aa8521c6bb07f4e3ad83db264"],["/tags/梯度下降/index.html","237e8cc91b90185c91a62ab6502ea0b5"],["/tags/模块/index.html","12a275c037b406d409b4df6901260f99"],["/tags/正则/index.html","cdd51f12d01975724d8a32f73ed20bef"],["/tags/激活函数/index.html","712dc92a7ba0b23805bce17affeae826"],["/tags/点击预估/index.html","425e0156558e2a461b3d6773ae4c826e"],["/tags/爬虫/index.html","b1ebbb3335e7a0ee9b3c18f5eedafc33"],["/tags/生成器/index.html","599b32b0a270c6a3fd5bf387dd36a681"],["/tags/类/index.html","dd4e316e0bd3c5a3f9c3b6e197e751dc"],["/tags/线性回归/index.html","2b5ad4b6b31bfc9eb1e8be04ed4eaaa6"],["/tags/经济学/index.html","2b77a04fb362f7e613e86cbeb21b2fa9"],["/tags/聚类/index.html","5eee7037336d988216c7171f792eaf67"],["/tags/装饰器/index.html","3e616dd85df18288e9373016a876e802"],["/tags/词型变换/index.html","6daabd3dedfdf11c8434f2f84ebc1e84"],["/tags/语义分割/index.html","29ff2030a0c189ef4db08fa039957ba1"],["/tags/语法/index.html","524c485eb58feb0100f2559370252b3f"],["/tags/语法/page/2/index.html","15b9bd79eb1c961e118e38123e1e8909"],["/tags/迭代器/index.html","6b277d638a5933b11c8b557a33cef4fb"],["/tags/逻辑回归/index.html","09218f8bfdec5a3dd466e6f887ade600"],["/tags/随机森林/index.html","4d9ede684cab193b9f1e4712b52ccf4d"],["/tags/魔方方法/index.html","9a0296aab0c59418b2db16bc036e7903"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
