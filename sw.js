/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","a41b8adb3a321e8b459243979c15fd20"],["/2019/01/02/Anconda常用命令总结/index.html","af7e7d4a0ab6bc7a80a4e8c1445bb482"],["/2019/01/02/句型/index.html","ddae52de132b05ae366fc81cf245ab66"],["/2019/01/02/日语助词/index.html","c1636b2a63830cfd3c2532eba9c31d7c"],["/2019/01/03/on-my-zsh/index.html","35fb93b215808f635ba48bb646a139d3"],["/2019/01/04/《当我遇见一个人》摘录/index.html","9725fc456f08d0aca1f7190c80111fab"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","91d7112efe5888c58fd3bda439151fd7"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","4b14bc763e3804b1ebf7eaf3ed7e96b9"],["/2019/01/04/经济学笔记/index.html","0e407e7a279fb47f5fcda58b2aba3c97"],["/2019/01/04/语法总结（5-15）/index.html","d6b93cf34454983e575a163190eb7f76"],["/2019/01/05/linux常用命令/index.html","123e4b61f29c6287f1d3c2ec3677d5b5"],["/2019/01/05/mamba/index.html","44bbdb3ea7e8ca48994dcca932e15511"],["/2019/01/05/rust 多平台demo/index.html","b7f8d5ec8ca77d57b727f4e21a91b471"],["/2019/01/05/tflite编译/index.html","6b7f001cb049ac0eda459ceb6f0715a8"],["/2019/01/05/tflite转换/index.html","b6f0c2d63852091e0fcda8561895da64"],["/2019/01/05/torch安装/index.html","3a8e6630763d3c4c5cf09de3af280912"],["/2019/01/05/vscode/index.html","051ac183ef68c851407a9756cb471767"],["/2019/01/06/敬语/index.html","79f9a83ff254ec1ef7e7597d579e88bb"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","9ac20eb28c9fb94eb2a0b93aa770151f"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","f3795e71686a94fcda4e2a37e7c4412b"],["/2019/01/07/cuda 手动配置/index.html","ecc5693c746e1258ba2da2b56b1155dc"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","d0e9fc188871a2e385c3ed296787b2d3"],["/2019/01/07/docker-ldap-mysql/index.html","9dc7f78aa7e1eee11de9b84252dae6ab"],["/2019/01/07/docker代理/index.html","98267fa989712beca3b22c2673469541"],["/2019/01/07/docker安装/index.html","afaa635a0f00f005159826941a205a4a"],["/2019/01/07/docker容器挂载硬盘/index.html","5a854140769bb8ef348da3c5b7a5609f"],["/2019/01/07/github上传代码/index.html","cbb4eca88c016b17f77e3e55b8e5917e"],["/2019/01/07/kaldi 安装/index.html","1c21c225e2ae93a9a67a8a42eeb53a24"],["/2019/01/07/linux常用工具/index.html","b09f7eac5eea381b84ac151d774541ca"],["/2019/01/07/opencv/index.html","b58e5a1d7969859247f5a985c666745d"],["/2019/01/07/ssh 远程连接docker/index.html","f3f67ffb3ec80c4c188d25f04fe68c31"],["/2019/01/07/导出/index.html","40b53e888fd6fc5863d431ff21603fb3"],["/2019/01/07/换源/index.html","42e47f492139a12dafd4699f32de8fe0"],["/2019/01/07/服务器配置LDAP/index.html","c08252c25a6f425c83aa91e9fa53b920"],["/2019/01/09/markdown/index.html","65f4ed0a3ae41cf1755c99e6744a689d"],["/2019/01/09/opencv图像美化/index.html","131666eb8de706718395dfb2f72839a7"],["/2019/01/11/19单元语法/index.html","a0d61db5628e718096889d8089137575"],["/2019/01/11/20单元语法/index.html","a7778035ac7c5d04169a44283ecc9225"],["/2019/01/11/opencv-图片几何变换/index.html","737e82e8089f829efa279b9b65459949"],["/2019/01/11/opencv-图片处理及绘图/index.html","50314a7567c2a5cb205e9ef1b46b639c"],["/2019/01/11/wine安装qq/index.html","fa08b0c8955199dcf7854eae78a1a8a6"],["/2019/01/12/tensorflow-可视化/index.html","edc0df09c5af23f9fe6fa887dbf94686"],["/2019/01/12/tensorflow-基础语法/index.html","544f8e22a3474db03352378a21b7dce6"],["/2019/01/13/RNN/index.html","2b563270a182779033b6f3e021fcd257"],["/2019/01/13/keras实现CNN/index.html","3f1f2bd914685d645d4b5b02f9bedf24"],["/2019/01/13/卷积神经网络实现/index.html","51e395ad7955583781ece3c49a7db192"],["/2019/01/13/循环神经网络RNN-写诗/index.html","c27f72423cacaaab65b6af99d839eb3f"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","ea12e4e28d355482438688e4437a7522"],["/2019/01/14/反向传播/index.html","dded8f3905c7f4b27c37b30ec643c643"],["/2019/01/14/图床/index.html","df8bd66a80dea766a2be587cf5d80b5d"],["/2019/01/14/感知器与激活函数/index.html","ee3c4a11b98dcbcf4eb54482ff93954c"],["/2019/01/15/PIL简单应用/index.html","f268cca3beb2ba23ac78e84f96b5029f"],["/2019/01/15/卷积神经网络理论/index.html","f9ad0f9021ab54d49ec975e39d4ede70"],["/2019/01/15/图片分类之pca-svc/index.html","7523fb54cd139f20af4f34a22ecb6408"],["/2019/01/15/强化学习基础/index.html","1fbc6605f39f65aec8e0872e20f3952f"],["/2019/01/15/经典神经网络/index.html","f99928ed0b7cceea0557b7990dcb6e45"],["/2019/01/16/DQN/index.html","53c4842036c77ba9dc26697a67d72242"],["/2019/01/16/TCP传输图片/index.html","966d07ae16f8c7be3031c06c1c664a3f"],["/2019/01/16/时序差分学习/index.html","8c640b78f502c706e6fc267cfdd084a7"],["/2019/01/16/蒙特卡洛方法/index.html","282d9d03d0ad46c18ae957135a06e133"],["/2019/01/17/Double-QDN/index.html","a9d8dc8687c8e546740992804ae7cd24"],["/2019/01/17/RNN理论/index.html","5563ec2cfc8ef587088737b0483b1581"],["/2019/01/17/梯度下降/index.html","85788c8738a6b042c009b1f77a3365e6"],["/2019/01/18/PG和TD3/index.html","369522fbe1fde55ab0e169a6342b4dd8"],["/2019/01/20/21单元语法/index.html","e7600103e8d8db45e0e61984fc75fe41"],["/2019/01/20/GAN理论/index.html","59b990678f0ea35d52a67e28ea72d186"],["/2019/01/20/PG3和IRL/index.html","fa7bac0febf2b1a944401840673f9e50"],["/2019/01/20/数据集/index.html","50a2ab02b481135f5c790870c3564181"],["/2019/01/21/DCGAN/index.html","7d0c0aaf3bce446cd1f050f167a1dcaa"],["/2019/01/21/LSTM/index.html","a68237a1bc8d502b0263abde13280893"],["/2019/01/21/点击预估/index.html","0f2d8a0aef579f7d0b7ff64b8ebee67a"],["/2019/01/22/SVD分解/index.html","632803916d7d55a95f4c4899926c3a38"],["/2019/01/22/SVM/index.html","638682706bfb8b4dd20f978acbb9d256"],["/2019/01/22/机器学习简介/index.html","272c980c8dd61fef15d50e30c89cd26b"],["/2019/01/22/线性回归/index.html","bc1f84b328106ec0a433232593779d18"],["/2019/01/22/逻辑回归/index.html","24e3de58f0ec9cd752b76a2830bab34b"],["/2019/01/23/numpy/index.html","dbe8a1c572cdf908bb5ca160e84ef31b"],["/2019/01/23/决策树与随机森林/index.html","aeb23455f80d33dc41187a8f590f2d4c"],["/2019/01/23/聚类/index.html","07524822e04ed11d16cbff964764b969"],["/2019/01/24/matplotlib/index.html","7fc6ea20013e59710515d2311fec116e"],["/2019/01/25/pandas/index.html","ea06d91543caa604cdf0ee09a4e93efe"],["/2019/01/25/语义分割/index.html","33fdbcea51b5a22181e9153c11be82d2"],["/2019/01/27/22单元语法/index.html","0f17d4b7ffded55fc5807dc9c54db22f"],["/2019/01/27/SVM案例/index.html","d31e151ea986c751eb719f01d959f429"],["/2019/01/28/requests库及爬虫案例/index.html","381f06c3963fe2e14dd8935343e44522"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","24b68daed6aa48f159f9439e88d257db"],["/2019/01/28/异常/index.html","8f670db38ae89ab484360d16d9d66a75"],["/2019/01/28/描述器和装饰器/index.html","4a82ac9f090cd5472a41a05a4ccb1dc0"],["/2019/01/28/文件/index.html","74b0bf175768dd18f7c998e9c1715443"],["/2019/01/28/正则/index.html","455b6aacad5ceb02b3a636c5c690bed3"],["/2019/01/29/函数基础和函数参数/index.html","94f606e58da1adb93f846e9d1bba014a"],["/2019/01/29/多继承和魔方方法/index.html","00b670182d7b5708097bbfce20a162ee"],["/2019/01/29/类定义、属性和继承/index.html","399b245175c33f9e80969f77ca20ee46"],["/2019/02/27/23单元/index.html","0f106093e1e3b6c14a18e9898f599533"],["/2019/03/12/hexo加速/index.html","59cc65657813bb9682cdbe0f8f8bd125"],["/2019/03/12/hexo系统重装恢复/index.html","e8066b8f8c69dfde37f2c148d37914af"],["/2019/03/13/24单元/index.html","6942c9c0bd3a820180bb0ea470eff0af"],["/2019/03/19/25单元/index.html","ca1fee96524353c18411e5031802ca25"],["/2019/03/26/26单元/index.html","a0c5ca27f1506c564765cc322543a4d9"],["/2019/04/14/27单元/index.html","02c6cb7f960895ad8ce380b1934e4011"],["/2019/05/01/28单元/index.html","0cd73b6a882ef67392be8a065448a41a"],["/2019/05/02/29单元/index.html","2efd44c5672c66c77a195707cfb966ea"],["/2019/05/12/30单元/index.html","e5dbe7931bbaecae587dadc2e4f2ee1f"],["/2019/06/03/jni/index.html","1daf9fc27033ab5a64169cd0dfdf53d0"],["/2019/06/07/JNA/index.html","8d616484755aa67e7d85ed9578bdd011"],["/2022/08/07/R配置jupyter/index.html","d420db764b0f383b1f532238cf4f69ce"],["/2022/08/18/FFmpeg常用命令/index.html","8f536fb16f3e7f488958f0092092f5f3"],["/2022/08/18/linux系统代理/index.html","bd505ae5907405233c48b8ed73ed6567"],["/2022/08/18/matplotlib补充/index.html","f1a77b2327663d10d68acdb35f6ef5a6"],["/2022/08/18/常用命令/index.html","a8798a2a77e83d19b952f4ffd0e4c9a8"],["/2022/08/20/sacred/index.html","35eaa44bfe13d4429213c126e3352a81"],["/2022/08/20/wsl/index.html","f589eb2a47b9862fad0879f7c6b6cbe3"],["/2022/08/20/双系统安装/index.html","edc7288ae2851bac011cdcbac4400acd"],["/2023/06/28/source/index.html","eff73849cd868ae3aa2a637a9edd2543"],["/archives/2018/12/index.html","8045db6c06b3c9c408c1e9795a5879c7"],["/archives/2018/index.html","106212154a9f67d13e62ced8c02c2f56"],["/archives/2019/01/index.html","78f3a12f483f8bfd5728998c80eb80e1"],["/archives/2019/01/page/10/index.html","8e59b93a66c8dba1d5312528ac0f5dac"],["/archives/2019/01/page/2/index.html","1b7dca71595a7bf7e3806152874dbfed"],["/archives/2019/01/page/3/index.html","e85375423927d7bcfacba08e0897b86b"],["/archives/2019/01/page/4/index.html","b746739e8e2078d209474c1a1406907c"],["/archives/2019/01/page/5/index.html","fdb53e6d03a321ab6bafdcb78a6dfebb"],["/archives/2019/01/page/6/index.html","f3f209a0feeb3f8dce05f68cced2a885"],["/archives/2019/01/page/7/index.html","1697667c91c1cb1c9558732424472719"],["/archives/2019/01/page/8/index.html","3c2909b93f840bdff64fc80a800444f7"],["/archives/2019/01/page/9/index.html","67a76381770a5cd1e3e57d1a9261b7f6"],["/archives/2019/02/index.html","6892adc144eef4a393f89fffedace30a"],["/archives/2019/03/index.html","eb030e1b746fd805233e4da20aa5f357"],["/archives/2019/04/index.html","ae81f597623beb1dc213a8081f2d5d5c"],["/archives/2019/05/index.html","53a7f6d67a0df0afb1fa7b2bed643146"],["/archives/2019/06/index.html","d6cafe03d3899dbb250e308260d9e0af"],["/archives/2019/index.html","5ff51bceb7a5053f2439a94f4b74292c"],["/archives/2019/page/10/index.html","2a4ab37319d1e41788c26c624f176c77"],["/archives/2019/page/11/index.html","facad1ce9d1791035c5ca16a06775baf"],["/archives/2019/page/2/index.html","128db51dd4ae3d2caed4791b4c1ca9a3"],["/archives/2019/page/3/index.html","6421634e11c412b11f5d92bd17e80b79"],["/archives/2019/page/4/index.html","a090fc524afa2171643210e32b0142bf"],["/archives/2019/page/5/index.html","ccfc3a9ed4b2c3f494b406bd4f0bb68e"],["/archives/2019/page/6/index.html","952262518e9121283e8699aec91b071a"],["/archives/2019/page/7/index.html","8a7a70c78b74398200e3f3377c4f9453"],["/archives/2019/page/8/index.html","8e8a3469183d67fc9afa34f0e25d4cf6"],["/archives/2019/page/9/index.html","6f40a10be86155f4710df4956eaabb4a"],["/archives/2022/08/index.html","5d22d61df09d681492e4052e888b252d"],["/archives/2022/index.html","ac1bfe2cbe67694d9e5ca8ede915d526"],["/archives/2023/06/index.html","28a918a92a138ccf70da7a6cf7d09748"],["/archives/2023/index.html","a6b7fb689f8256966232768b0b085656"],["/archives/index.html","60b9bd773b9de3a76de9cab4b4ccda11"],["/archives/page/10/index.html","9a036db2941e9aa65fde9b9fe08a0992"],["/archives/page/11/index.html","bfdf29a7eb0a73a0b845602f8a204edc"],["/archives/page/12/index.html","aa2b782d913664920fb707ae979865fb"],["/archives/page/2/index.html","8ce7e83e4d0dc3ffbc58a8a0898d6558"],["/archives/page/3/index.html","b8e5aaef9dcee553ff571faca6c8b193"],["/archives/page/4/index.html","4f70395cbbb60104bfcdd4d74d202575"],["/archives/page/5/index.html","aac90cc0d067dc0bb3223ae5f725ea8c"],["/archives/page/6/index.html","8b786a0ad1d06875cf122c23fbde13c2"],["/archives/page/7/index.html","ca47ebab5141c16c44ab508473ce42a3"],["/archives/page/8/index.html","f7070f8402436cd3248fb2d618a6d568"],["/archives/page/9/index.html","c540f4a6f39d445f91336f5c94221353"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","accba8f662002029c6b0a465f06ecd66"],["/categories/dxz/index.html","15d6c9282f05f4b1ec5aff382e9100ac"],["/categories/index.html","122e59ed05e92e43fcee2375f2629675"],["/categories/linux/index.html","6c5326f8792f1828f5c356004d9152e6"],["/categories/python/index.html","7ded40ad113f88eb8adfaf06a3f26bef"],["/categories/tensorflow/index.html","40c85d40bdb3ee3113b2718cc4eb5d04"],["/categories/图片分类/index.html","d39a059748ec39e52bf71a298df14c3a"],["/categories/工具/index.html","aa50cb90d57344da089fd15d3b4592b7"],["/categories/工具/page/2/index.html","042896372a8ee610bd97aaf03738d6be"],["/categories/强化学习/index.html","4032d8c893e3438cf4e3cb39731f740b"],["/categories/数据集/index.html","7909c82100a28ffa4e1ce6c1096a6c3f"],["/categories/日语/index.html","c4d95c0d8adaa252050260a5cf381e34"],["/categories/日语/page/2/index.html","01dd81d4e5a6af24fb395354cabca02f"],["/categories/机器学习/index.html","6f8603556e1fe04f6f4b6f46732cf38e"],["/categories/深度学习/index.html","e28b2b9be133cf81daea30b43b8957b5"],["/categories/深度学习/page/2/index.html","3a67b45fbee96675ffe2668f250c63fb"],["/categories/深度学习环境配置/index.html","f56e3f6d22f7153f1e47c0f2290883ea"],["/categories/深度学习移植/index.html","ec59a463edea251523815603e95f8016"],["/categories/计算机视觉/index.html","4e1f1bf75e7752155f8d04cf24ef4959"],["/categories/读书笔记/index.html","b42e1ccb0846dcd04af8de89efff0882"],["/css/main.css","f6a078e6614af98fda605c5e122bfd6e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7a40e0eaa3309a455b7d8a7dc5a6af07"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","08028f24b678bbf6ff97c37515db70d3"],["/page/11/index.html","c82d23c4f677bc775e8766036032a11f"],["/page/12/index.html","1afb2cfb42d8c10a9f53216a7921d3ae"],["/page/2/index.html","071138bd12caa636fa0e0b0c7956adae"],["/page/3/index.html","0d22abe70b17e68cd73e0a3186d10631"],["/page/4/index.html","77621bcc03e4e5bd711468e787dcc41f"],["/page/5/index.html","aed02226685998a47c1ef92bba6f20af"],["/page/6/index.html","40ec8ee2e0a6b42aeed2e3fe423b3f49"],["/page/7/index.html","62afc7185f34e6b3b6bababafa4a4cb5"],["/page/8/index.html","16618141e04facf9b817e03871b3ee19"],["/page/9/index.html","51e3f2ed6cc329ac5921b82da1aa487a"],["/sw-register.js","c01fffc99557c38f775081c0f8df7c08"],["/tags/AlexNet/index.html","ad67afbbc5a1b30aab6eb38260d757b3"],["/tags/CNN/index.html","8cd287f54ddd667b001086f0104c4c52"],["/tags/DCGAN/index.html","1daad1cb5e8c75f6ef31474b20e3d021"],["/tags/DDPG/index.html","0eee88375377b9ce9ba9605954e1499e"],["/tags/DDQN/index.html","583edc102f2e38814829fdbd4c91546b"],["/tags/DQN/index.html","7a3b89211b4332461a366d4bfa78806a"],["/tags/GAN/index.html","ee0dbf50de89b2c4f9f0826a658868a5"],["/tags/IRL/index.html","d0c0231d2de65bcefbae830026b012a0"],["/tags/LSTM/index.html","1a0f262f743195ee99a28c6f6454a685"],["/tags/LeNet/index.html","dc6279ce57d6272ce361640ee4bd5b29"],["/tags/MC/index.html","61f6518ece891ee2247b23ec0ef898c1"],["/tags/PCA/index.html","49f0f48796a3532672b61a056333d55b"],["/tags/PG/index.html","2f1144f8cbe90b95e084ad906022a36f"],["/tags/PG3/index.html","f3e43e12cca65aac18019b78bd739dce"],["/tags/PIL/index.html","fe7c5a323cc22b76ef722881b98bcbd4"],["/tags/R/index.html","acb08f41d403fbeaf9aa48ee0f7da9f0"],["/tags/RNASeq数据下载处理全流程/index.html","cf4fb22746fda433b7164a82f5f3927b"],["/tags/RNN/index.html","20e5a9c37cafee213778a44ef65da6b2"],["/tags/SVC/index.html","4a368195ca5f4c7e753662556bfe3004"],["/tags/SVD/index.html","57cfc8019cfe6e9563f5165d9facd55b"],["/tags/SVM/index.html","78a73d44ce9a0aaff14e2f54d60d3859"],["/tags/TCP/index.html","d1a26bd33c6d7b1c8fc6c81b7368ad8b"],["/tags/TD/index.html","b4e53913f3cbf69bcf50cd82cf0b9d69"],["/tags/TD3/index.html","067c5d775254da54b54764085ff94b58"],["/tags/VGG/index.html","343323025c16037a18fc59f8d4eaf0ae"],["/tags/amd配置/index.html","40e2d0c37913e2ba81a9bb594e627684"],["/tags/anconda/index.html","96d576f429e0635d482df0ed6011100b"],["/tags/conda常用命令/index.html","a72606a18e5f51355106d09b0f27e7af"],["/tags/cuda配置/index.html","c31e31536963f1a4e17009ab2ae53ed4"],["/tags/docker-ldap-mysql-arm64/index.html","781f8a185b5cdbe5f8cf5127f3e88e2a"],["/tags/docker-ldap-mysql/index.html","e268f339184963987a0d45983228ad89"],["/tags/docker代理/index.html","e0e6cd99971734228f68294959038f7d"],["/tags/docker安装/index.html","a3cad1638ca25932dbf8165c1a71f6a1"],["/tags/docker容器挂载硬盘/index.html","1dcf1ab8cf1e81437e99dd79f1db7aeb"],["/tags/ffmpeg/index.html","2bb74e9de410f2a944bb17f8aa2cbfe7"],["/tags/github上传代码/index.html","975138fa5d25d2867fd4c58eb53f269a"],["/tags/hexo/index.html","1a935c7e71d44643b6f088201bc81bd9"],["/tags/index.html","93419282438c10108fa1ab7b3be1dc73"],["/tags/java调用C/index.html","7cd28d3f2eb8ba08afb045786dc0bc01"],["/tags/kaldi/index.html","dc882d3574e83a82328d58f296e67a19"],["/tags/linux命令/index.html","0643f71da98efcb8afc3962479aecaba"],["/tags/mamba/index.html","058bf499bf3aa0e468ca7cf7c45bc40d"],["/tags/markdown/index.html","da438036ad035077ef9277aef9ab176a"],["/tags/matplotlib/index.html","e782b8b2740e671787aeb5af6d6e62cb"],["/tags/numpy/index.html","5a55f3525d78b880fdaf1c9aaf9f3405"],["/tags/opencv/index.html","6d6b7987102875736be6f77c0d34f3dd"],["/tags/pandas/index.html","41d0597cc614bf394b4e7ba9d81ce920"],["/tags/qq/index.html","e4e225e1cc822ed4cb885a53819f3bd1"],["/tags/requests库/index.html","9622d7e0ac5c8400566134dfae152467"],["/tags/rust-多平台demo/index.html","32aee4fb09f769334f350bef54ac1efc"],["/tags/sacred/index.html","74c5c029b3c3c6d76c9af95b54e5a3bd"],["/tags/ssh-远程连接docker/index.html","5473c36530045b2d9e9821628f131097"],["/tags/tflite编译/index.html","8a61dc16334aab3f85d7f9340df95080"],["/tags/tflite转换/index.html","8e54202dad987125af76b8afc13ffa38"],["/tags/torch和apex安装/index.html","3cc10ef4e0680cad1c5c36c58fe38675"],["/tags/vscode/index.html","fd3cea0603df1b7b1647d6cf6bdb6459"],["/tags/wsl/index.html","040907c5eb21bb5ca9bd010e1e180648"],["/tags/zsh/index.html","107a592842ec977fb6032dd0ef90a1b3"],["/tags/代理/index.html","526875c8ffd7ebdf671fb4f4907c3c36"],["/tags/决策树/index.html","9dcf87b8f274cdbb4ab800e6dd17832c"],["/tags/函数/index.html","cc47bbd6f36b40da34ffa870f5d8205b"],["/tags/列表推导式/index.html","60fc54ffba4f1828cb16d50ae96c0498"],["/tags/助词/index.html","edeb045d1f9290917549bac44be79b3a"],["/tags/包/index.html","5ac829bd3e2538d5b72304f3359646da"],["/tags/卷积神经网络/index.html","c16f4166fbfe45be312bf319682fc64c"],["/tags/双系统安装/index.html","f69aebad2adb1e6a5e8688f022f24aca"],["/tags/反向传播/index.html","e19a873df30dc0b34f9ec475cbb66ed4"],["/tags/句型/index.html","f37e3e4da7cff8c269b936caa65bf708"],["/tags/可视化/index.html","95c8c5b20b447643558d22a53906af69"],["/tags/哲学/index.html","06f44b1921bb1afb3875a5c746f14698"],["/tags/图像美化/index.html","f9be0db70c1d33f68806f85cc0c53ac2"],["/tags/图床/index.html","341cfca08e8e62ea6d7a4b40a12b1ec8"],["/tags/多继承/index.html","0fabb8096d5bb188e42789af5269995c"],["/tags/工具/index.html","c9615e8795f0cfa27fb11313e795fbe1"],["/tags/异常/index.html","44b8977811a5255359840407442a7ee9"],["/tags/强化学习/index.html","8f041c4bd4ad49667beddc8e548b064c"],["/tags/心理学/index.html","bb355848554246ef831a3dbdf71a9341"],["/tags/感知器/index.html","7c35727a31b0a91a7883008b5bbc32f3"],["/tags/换源/index.html","d9122b6de3be845542774fc83ada6674"],["/tags/描述器/index.html","7fc7c773a2c6372ec7f51d81c427c98b"],["/tags/敬语/index.html","64b26c67e38cd251c3030347d1aa3a1d"],["/tags/数据集/index.html","d567a9525e6bbc8373892bcf3221b444"],["/tags/文件/index.html","30af38a18b2a2316f99a101903d9c43f"],["/tags/服务器配置LDAP/index.html","58b9fcfdfffc1d30431374d4c4cf9945"],["/tags/机器学习/index.html","a1b632629d7ada8a41367b6178d38530"],["/tags/梯度下降/index.html","1d9f2ed75536d62c47a284da44b960d8"],["/tags/模块/index.html","3544f0370c1309cecb34d23e4f254543"],["/tags/正则/index.html","0e98e44556207ea461c49246a9164a27"],["/tags/激活函数/index.html","fd87eb8246a8ebf66e2a2aefb92ac97a"],["/tags/点击预估/index.html","255d72a95f95f32c7f48465b931f8a6a"],["/tags/爬虫/index.html","73d983635aec99fba5523a6cc92d5dc9"],["/tags/生成器/index.html","a87f9f69338f998993bb7b842f16da06"],["/tags/类/index.html","495f27babbfeca8b36b628a4f7c3c947"],["/tags/线性回归/index.html","a4e07aaed5cebb704b7a10e8236d55e7"],["/tags/经济学/index.html","1e0e817f2eb39e2051a04f4ab9465472"],["/tags/聚类/index.html","77dc49663aa697977affaac4c8589542"],["/tags/装饰器/index.html","39b52842bc8474a1b9606628cbc5eaaa"],["/tags/词型变换/index.html","9b0e0740ebaa9e2d87618f7df9902879"],["/tags/语义分割/index.html","06acd53734bb5c90638c0f417e59e752"],["/tags/语法/index.html","703b232febb0bf699626c7a7c7d5ae0b"],["/tags/语法/page/2/index.html","9f7e04ab424a5f0e2d73ea5607840fe7"],["/tags/迭代器/index.html","9e693c23fa963c19342155c799ea5602"],["/tags/逻辑回归/index.html","06b8b7416a9b2ce855b9efc7792c2fcc"],["/tags/随机森林/index.html","b25125c25da20c962552355881a612b8"],["/tags/魔方方法/index.html","9fe57d0ef7379ca23854260e9b44212b"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
