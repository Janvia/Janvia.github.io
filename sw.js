/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","19d06a731bbfffc6ae04cee640694616"],["/2019/01/02/Anconda常用命令总结/index.html","f75280f289f58c208c180303f01257f6"],["/2019/01/02/句型/index.html","acec6fd2a78c967403155c7c2138064d"],["/2019/01/02/日语助词/index.html","3c9eedde7ca37a190314563c2343ebc3"],["/2019/01/03/on-my-zsh/index.html","7e1571fe0b5dd38b1cef1d4a626efcc6"],["/2019/01/04/《当我遇见一个人》摘录/index.html","72a0e43b6598a075652087ba4244d8e1"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","0cfb1d8eab316a1d19383e50e5ed2ca1"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","364c0ee55b68f36297d9f2a4aa770ad2"],["/2019/01/04/经济学笔记/index.html","27be7f49dd2d1995569f2285165a23e9"],["/2019/01/04/语法总结（5-15）/index.html","20e28c2a80b2f54267ea0f72c46d791d"],["/2019/01/05/linux常用命令/index.html","ac91214833a196d5639da4a8a60eb5c4"],["/2019/01/05/torch安装/index.html","91b32a34edbbc1ef8789e2d562477cf6"],["/2019/01/06/敬语/index.html","b421ac1c5d180fe355e5d0f21e7489a9"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","0dcb4a29ddb3e9066f7a6aa5d7f2f223"],["/2019/01/07/cuda 手动配置/index.html","ce16fc0b08fe21a889d65295d01aed0c"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","314065e89291b67d658d1cb113216add"],["/2019/01/07/docker-ldap-mysql/index.html","15de8e81e19e8305c5dd6dbd8ea0c38a"],["/2019/01/07/docker代理/index.html","70846e2c06f9ef363218b2c4df5704c9"],["/2019/01/07/docker安装/index.html","c319426f17eeffd8dd98f26fba2ada79"],["/2019/01/07/docker容器挂载硬盘/index.html","2ec74d35dd30fd03166cf2ff2064ff64"],["/2019/01/07/github上传代码/index.html","88b24419e616d07230b8a1917af1793a"],["/2019/01/07/kaldi 安装/index.html","14dcbe57cf6f95f72b73f61a7dbee297"],["/2019/01/07/linux常用工具/index.html","fd9ab3d8a2bd4b4cf0386dec6371330b"],["/2019/01/07/opencv/index.html","4b097e061785de56911d996f5e0ea735"],["/2019/01/07/ssh 远程连接docker/index.html","5a1e857dc93f72b2478559c1b4959441"],["/2019/01/07/导出/index.html","52d996301e5e2e3cbfaf57dd427f4443"],["/2019/01/07/换源/index.html","5c22b66680b90fd7098118142c02f468"],["/2019/01/07/服务器配置LDAP/index.html","ce605087b8566eb4eebd2b4e22b01d26"],["/2019/01/09/markdown/index.html","bbf0a5a32f57368114590933a83ee383"],["/2019/01/09/opencv图像美化/index.html","e510e02b085c94626895d9624ebf5cca"],["/2019/01/11/19单元语法/index.html","03980216c8d0929559514e4abbbeabd3"],["/2019/01/11/20单元语法/index.html","8b6f5a2a1820375ee1182ca4e837059d"],["/2019/01/11/opencv-图片几何变换/index.html","5646bd7d3a1649df5b6f4117272cd9a7"],["/2019/01/11/opencv-图片处理及绘图/index.html","b1828e1f5c84b310c423eebe1bfcc5ec"],["/2019/01/11/wine安装qq/index.html","0d91f21fa3bfa34c95fad5da82bc7e60"],["/2019/01/12/tensorflow-可视化/index.html","67343427d366af747434a26ef398dc84"],["/2019/01/12/tensorflow-基础语法/index.html","d6297063ec392f85ff5007af2943c271"],["/2019/01/13/RNN/index.html","c5f7f13d2a841995298695a67716751f"],["/2019/01/13/keras实现CNN/index.html","6a27b14522934964e818dca7e3ea9c9a"],["/2019/01/13/卷积神经网络实现/index.html","5ff27875248360d191ffbdc84bde36f4"],["/2019/01/13/循环神经网络RNN-写诗/index.html","af8414297ac829dbe022d1d0cffb55ff"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","6b113f9cd62acb634aa21199560c950a"],["/2019/01/14/反向传播/index.html","b6b5af39d70f3cce130de50c8c244814"],["/2019/01/14/图床/index.html","381dc3aaed786ff25dc4c911c6436175"],["/2019/01/14/感知器与激活函数/index.html","12c98cca7dc47a0ccdceb5ce34569121"],["/2019/01/15/PIL简单应用/index.html","912dc6f3d067c2ba1de8ead74a0630d6"],["/2019/01/15/卷积神经网络理论/index.html","7f3be28f65ab462a42f26e9a59f57725"],["/2019/01/15/图片分类之pca-svc/index.html","14a5ad767c892e33427693d215aace1c"],["/2019/01/15/强化学习基础/index.html","5cc48320505fa37585f80f116f513909"],["/2019/01/15/经典神经网络/index.html","626768bc5ece8494ee61258010d617b5"],["/2019/01/16/DQN/index.html","6698c8a0f373113257722e16ed5477ad"],["/2019/01/16/TCP传输图片/index.html","6395637ee47d2bfa73a2b01dc3f24e86"],["/2019/01/16/时序差分学习/index.html","a8f22f5e4b0eaa4a7f1f4aa2329e9595"],["/2019/01/16/蒙特卡洛方法/index.html","74379e7f2565c9ec59a4cc7e13a80da4"],["/2019/01/17/Double-QDN/index.html","3fc2f238ca5638959fc02897864495cc"],["/2019/01/17/RNN理论/index.html","4f952185d9e1c7c4386dab8263bf63f2"],["/2019/01/17/梯度下降/index.html","28a10c3409c90742f52814c417b81a93"],["/2019/01/18/PG和TD3/index.html","4d6e98686ad834babbf0c405e2327ab1"],["/2019/01/20/21单元语法/index.html","e14b04fd3ec30752c3dcd08cdd24bbd3"],["/2019/01/20/GAN理论/index.html","50cfe573d0a2094fe51497812f409f3c"],["/2019/01/20/PG3和IRL/index.html","22bcf18c17760f486be09fbb4ea2bb64"],["/2019/01/20/数据集/index.html","4340c8f7868fec102a6005220f2e27d5"],["/2019/01/21/DCGAN/index.html","33948562fa84cb5d662811f5ae90c3a9"],["/2019/01/21/LSTM/index.html","73434e7cc7b31236a44a2aeae7261f12"],["/2019/01/21/点击预估/index.html","36e2f2106567e1958a33e3740bcc1491"],["/2019/01/22/SVD分解/index.html","45aa87079e4688c5b10b7da11180a3c5"],["/2019/01/22/SVM/index.html","2095b364925db3ddc1f2deed997b36b2"],["/2019/01/22/机器学习简介/index.html","37b5a691de8089ef86cc3269e90875fb"],["/2019/01/22/线性回归/index.html","4e1e4cd5d5fc71fb485f2249c23e87b3"],["/2019/01/22/逻辑回归/index.html","615ba937cd75bd249152d25c278f8a61"],["/2019/01/23/numpy/index.html","d22e0c9a4e3f375787438d9fc9951877"],["/2019/01/23/决策树与随机森林/index.html","cc43d4ba898d0c3f1d8041645486f540"],["/2019/01/23/聚类/index.html","80c08309027d476fa23d9f9a27dd79d4"],["/2019/01/24/matplotlib/index.html","e71d779119625608559072a016c12637"],["/2019/01/25/pandas/index.html","0f16927d56cd036e1ddd4268d2d1383d"],["/2019/01/25/语义分割/index.html","b6c246c820835c31ee4df3a40bf4047c"],["/2019/01/27/22单元语法/index.html","f09e7b616d92405e41a987c27eff7772"],["/2019/01/27/SVM案例/index.html","64986f9108b7c06404072861dfe79897"],["/2019/01/28/requests库及爬虫案例/index.html","0e280da40736857ca9441cebafaa9011"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","0d6c4612454ea8219dd37d3a619f15c8"],["/2019/01/28/异常/index.html","66051f6a80c61ed7c3db204a727571e6"],["/2019/01/28/描述器和装饰器/index.html","b4044bb8aa648b5b0081c10f33a20cdf"],["/2019/01/28/文件/index.html","eefccc222c4594e4697627d4db929a64"],["/2019/01/28/正则/index.html","a2e9a7105a4bcb526f69345200b4c7a7"],["/2019/01/29/函数基础和函数参数/index.html","14896373dcfa0911b91c44ce723176c0"],["/2019/01/29/多继承和魔方方法/index.html","744ce89fbee46f9fbfcea2fbde148006"],["/2019/01/29/类定义、属性和继承/index.html","a96daaa7e2d29e769a1b5cbebd17acd0"],["/2019/02/27/23单元/index.html","2e214a55d7174d8256ed8485997105b2"],["/2019/03/12/hexo加速/index.html","d7f114ce7e46fc86f5d8ed9e403c5031"],["/2019/03/12/hexo系统重装恢复/index.html","480c9e4873eacf37b8fd494ad8e51cf7"],["/2019/03/13/24单元/index.html","b34be6498496d157d7afc1dd55f20f44"],["/2019/03/19/25单元/index.html","a4065e7078353a8e755e75d3f6207a48"],["/2019/03/26/26单元/index.html","2df5ae2434b8f8f7481ce18496d21079"],["/2019/04/14/27单元/index.html","fe226909a598197d56458ef7944f6463"],["/2019/05/01/28单元/index.html","591da8789a4f4b60175dd98f45b92270"],["/2019/05/02/29单元/index.html","862481f106bc1e5bde4978b918b312a7"],["/2019/05/12/30单元/index.html","976ad349e52747f23855f723cfc1bc77"],["/2019/06/03/jni/index.html","7bbee9cc63e7f6b001553f08949cdc7e"],["/2019/06/07/JNA/index.html","727f671d60c2b82c9e74ec6ff551803c"],["/2022/08/07/R配置jupyter/index.html","b8dcf308de0dda9a8adb8625291e88f0"],["/2022/08/18/FFmpeg常用命令/index.html","aef38dc0bdd046051ae76c96056f4e06"],["/2022/08/18/linux系统代理/index.html","755c68a155e304425ae07800a90ef6a2"],["/2022/08/18/matplotlib补充/index.html","5982be3627f687dd8d61839024c1d1fe"],["/2022/08/18/常用命令/index.html","c476d278e5b493818c3146decc96831e"],["/2022/08/20/sacred/index.html","9f5ed6f47c0b86d2c936c5deff5b67f3"],["/2022/08/20/wsl/index.html","0b379d7f2d1c8fa3a4db3ea98d42d69b"],["/2022/08/20/双系统安装/index.html","581a180fb6dc80602189e227ad545382"],["/2023/06/28/source/index.html","d382aac768e31147ed618fbd27f9c6a8"],["/archives/2018/12/index.html","cfe389bdb9007b893890bedfb2d29f56"],["/archives/2018/index.html","84c00da5d08e2a3a507559e7f07d528c"],["/archives/2019/01/index.html","b5aa3a58152aada028a067c6c0111252"],["/archives/2019/01/page/2/index.html","3f0cd04612ad91564cbcd0d631d47f6b"],["/archives/2019/01/page/3/index.html","0dcf086479f6cc3c84b582d3869dbdbc"],["/archives/2019/01/page/4/index.html","fc684903a6d84cb3640f48c997399ed2"],["/archives/2019/01/page/5/index.html","0ef181464a00908c46c11688569a4feb"],["/archives/2019/01/page/6/index.html","eb777772e571c2503c25f1624891f203"],["/archives/2019/01/page/7/index.html","8ac2943b11d01b64a6096fe833da3d84"],["/archives/2019/01/page/8/index.html","086387d6f3c9e7905776ba05058a6a09"],["/archives/2019/01/page/9/index.html","de126fbfd640e08921047207cb1e5af6"],["/archives/2019/02/index.html","cd578552d76f3266debc4b0771cb619e"],["/archives/2019/03/index.html","31c08e318f4a8c0c826f01d162d909d3"],["/archives/2019/04/index.html","7c79cbcb70f2a8903097335b6f54069e"],["/archives/2019/05/index.html","946881ffa5fc24093f5f242318e83d5e"],["/archives/2019/06/index.html","d40fa671e3839e34ead6e1b614e5d702"],["/archives/2019/index.html","121d720aff49fb878ee2cc9e679c4c6f"],["/archives/2019/page/10/index.html","99b86c4ff900d0585b70b534a0a28cda"],["/archives/2019/page/2/index.html","a5825688193082a2839e32db6a16a479"],["/archives/2019/page/3/index.html","721425c4028944c0737eadfad16a34b3"],["/archives/2019/page/4/index.html","208907e11d35ff2352632f46c119862b"],["/archives/2019/page/5/index.html","8a745504699be710fd3834726bd98668"],["/archives/2019/page/6/index.html","99411ae8dee387294668b26fff745b1f"],["/archives/2019/page/7/index.html","61e240049be5702bcd5380c91d3bbbea"],["/archives/2019/page/8/index.html","6950a5b342cb0436c89dd42b49781837"],["/archives/2019/page/9/index.html","cc1fe55adf62dfb949f96dfbb4323080"],["/archives/2022/08/index.html","d990bab27ad9818f9798287b06218f22"],["/archives/2022/index.html","d6c6933d31347627661eeaa3576a04f3"],["/archives/2023/06/index.html","b95c5f446c4f91c44470d518974b8865"],["/archives/2023/index.html","bff33eacff1644f258f7e13a18716e46"],["/archives/index.html","2a9c817013a8461acf93699b236d3903"],["/archives/page/10/index.html","4751fe35ac08dedeb38f6b93de2c7638"],["/archives/page/11/index.html","4ee01851e9a9b172742856e30461de7b"],["/archives/page/2/index.html","ef267b0f6838e4cc58d4938347132c86"],["/archives/page/3/index.html","9ce07873ce02b640582348b4ba778bd7"],["/archives/page/4/index.html","da8ca11f1014218353392d1845c55fea"],["/archives/page/5/index.html","821710724313d41e9f7ffbe90349cb89"],["/archives/page/6/index.html","3163ccafad471abecd6692644f303584"],["/archives/page/7/index.html","ada8f2dac7396ba29b53099084019490"],["/archives/page/8/index.html","64e6561a56a4f0265b54b8adc2f2babc"],["/archives/page/9/index.html","137eff8f193d777fe543d13569666ef6"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","de6040543e941786c265e5aa39e196ec"],["/categories/dxz/index.html","3219b9c60c603aee9425ed4685620c49"],["/categories/index.html","d65ab451cbc6b4c9a915080ad3c2ec6f"],["/categories/java调用C/index.html","77e3514ffbbeeec05d356b67e8fe1325"],["/categories/linux/index.html","eabe92e0edda0e78d71c5768ec85a700"],["/categories/python/index.html","72ee4cbf6377946e250213d0016a4747"],["/categories/tensorflow/index.html","9513c1e1272f030a194188ba551d9fe0"],["/categories/优化算法/index.html","e771c27770c1cb5d4e169d40f29b9cab"],["/categories/图片分类/index.html","fcb5b1f18550b24d492ab22a00ee02b2"],["/categories/工具/index.html","b5ce5075d35f8c21ef2934a0e6f2a678"],["/categories/工具/page/2/index.html","23645ae970db5000ff4b787955a88806"],["/categories/强化学习/index.html","2960d69345463061f6e927d9e6240274"],["/categories/数据集/index.html","46c88091da704a7d7e9b5c6cc988b9a4"],["/categories/日语/index.html","743b4e08266dab18bc4771a622ba832c"],["/categories/日语/page/2/index.html","a72290a7575cce1e12df757d1e507e84"],["/categories/机器学习/index.html","478c283955d5a95130f1d6342ee944dc"],["/categories/深度学习/index.html","59722186c4e7dfcf5e11c1faa2dbb801"],["/categories/深度学习/page/2/index.html","5652508a5d15cef7aa9bfef9fa611778"],["/categories/深度学习环境配置/index.html","f6b1be24439de8681b0e32d5132d635d"],["/categories/计算机视觉/index.html","4c9b83eb25960186139b3db6c6198a5d"],["/categories/读书笔记/index.html","038e677b71efab6f713ee26b3afec7d0"],["/css/main.css","66b118c28bf85c3e4fd01ede99dc88ba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","cb8655cc623b61ef0b8c5d2fed17720c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","7eb39fd9e5ee31562b507b7611523d2e"],["/page/11/index.html","e6c47e4e5c9de42a9c34f4409b356d66"],["/page/2/index.html","a3dce9f688eed9491f5cc8be0fcd70bb"],["/page/3/index.html","6ec0c9607dc307ad7251dc3cac53e68c"],["/page/4/index.html","4fde42f14b0bc3abc89e10642cf32555"],["/page/5/index.html","15ed793ff79c2aabeb779907b8169c05"],["/page/6/index.html","c1be0894ebd6a28e29b40f601d129285"],["/page/7/index.html","22264e5f21ac25c8ff85dc1043f42ad2"],["/page/8/index.html","73bc9895b292ce334495088e82a1cdea"],["/page/9/index.html","ed6357f5258e6e8da641c202f887f679"],["/sw-register.js","0d95872978b1911f8deb91cddb89169e"],["/tags/AlexNet/index.html","36e4676d803bee3aa5f40276f9378012"],["/tags/CNN/index.html","e6a10e3b56697502781e980edc3d149c"],["/tags/DCGAN/index.html","ffc3be2a94e3cd39292207848319c826"],["/tags/DDPG/index.html","532eb9e5289e1c5f69bb065b3b3865e2"],["/tags/DDQN/index.html","85d73b87ec9d823956144c657c37981e"],["/tags/DQN/index.html","190c96dfcc4ddd39569bfffb53195fb5"],["/tags/GAN/index.html","883ecf4308cdb139620da2259fe75d72"],["/tags/IRL/index.html","5c063acdaff8fc6951b3dd2837c25c1a"],["/tags/LSTM/index.html","f835f70e33bae4cbcb7e8b7203bfd6fe"],["/tags/LeNet/index.html","79b72d5f6b679eb5902e5fdcb6fae3d7"],["/tags/MC/index.html","227112f11dba15c634e598b5c873abdf"],["/tags/PCA/index.html","e3b24989f0eed4af308e1e679ac1563f"],["/tags/PG/index.html","74227729ad651640b86c2d67d0db7893"],["/tags/PG3/index.html","cfc6368b10cc63ff6c4ab5f3eb9e7d69"],["/tags/PIL/index.html","67ee4a6af48c727444afb67635ced7eb"],["/tags/R/index.html","88c7f676c75b4d5c29b155430b1bd99d"],["/tags/RNN/index.html","cab94299a6ef8ca4e49df36b70f5050a"],["/tags/SVC/index.html","e89f21ffa6a016b7688576a715adb107"],["/tags/SVD/index.html","9f0b346baeb6b121ca41613469bd5874"],["/tags/SVM/index.html","7b9d00a8fea448689b8e05eba2913bcc"],["/tags/TCP/index.html","f32da4951903433885fac504d0c24d8e"],["/tags/TD/index.html","5ff18e207fbc8c5cb641583282bca049"],["/tags/TD3/index.html","ca5bd1680c1de4d676eb04254bf5368a"],["/tags/VGG/index.html","4f3ae5bc0f2a4cf0ac2172b839197d7d"],["/tags/amd配置/index.html","15cc3e66f32429d61bde78bc7034d54e"],["/tags/anconda/index.html","57703312efaabd3896245b228b45b3ac"],["/tags/conda常用命令/index.html","9662081f5c83f235ca1ef83da2b0267b"],["/tags/cuda配置/index.html","bd4f94de1290a47f11a39629b02b82a5"],["/tags/docker-ldap-mysql-arm64/index.html","cfd580939cc3b0a56a25b57cf4f99d03"],["/tags/docker-ldap-mysql/index.html","1c573c5eaef05b2867c2bfa2f0b2908d"],["/tags/docker代理/index.html","462acf03d7a063331c400dde63b8a0a6"],["/tags/docker安装/index.html","040d8de754f6bb1908adaf514f9625ad"],["/tags/docker容器挂载硬盘/index.html","a1623e7907087c99e5ffec409791a5b0"],["/tags/ffmpeg/index.html","b48c41d30e64b97041f097957287c970"],["/tags/github上传代码/index.html","3790dd3a220dc517c2833b08e4c9d8c2"],["/tags/hexo/index.html","12dbba1fb5d7df250be1f0ceec8f872b"],["/tags/index.html","ae31fe6974189e79b4035849d5fa6999"],["/tags/java调用C/index.html","b59ffda8ebba03974da96cda44fcec8e"],["/tags/kaldi/index.html","d83068460d8758e98ea4208502c4fe93"],["/tags/linux命令/index.html","ef72311ddbe268edadf31acfe1754c51"],["/tags/markdown/index.html","4b1269ccdd63b3ae1951bf57bfdd211f"],["/tags/matplotlib/index.html","6234c6fadc3bd1338b02901260a655ed"],["/tags/numpy/index.html","da0756aa4bbc5a225ebca74e043edecc"],["/tags/opencv/index.html","d95b2c3db5b386a74bbf5e8f4619f287"],["/tags/pandas/index.html","0e88ce9ebeab4dda9ee1a8b4ee9a98b0"],["/tags/qq/index.html","4e1ee12d36721b0c336b75693d048f75"],["/tags/requests库/index.html","81a298b8c3bdaaf28059273a87713f40"],["/tags/sacred/index.html","fface3892ad6ca42e7cceacc4c01f50d"],["/tags/ssh-远程连接docker/index.html","c91bcf76b1006a661ac3881a3adc4864"],["/tags/torch和apex安装/index.html","ca5fa103f2c7800c04b3f15ec3a5d304"],["/tags/wsl/index.html","829ac759e5ca99bbe739164c0e4b03b1"],["/tags/zsh/index.html","2c80c4d481d60ac5dc5347b87b8a2eec"],["/tags/代理/index.html","01428500c7d2e85261a00cc56e8a6a60"],["/tags/决策树/index.html","2a489d4edda2e035ea7dc6be90dfcf2a"],["/tags/函数/index.html","53f7d81bd82b5c3e32b05b5edf0d37b9"],["/tags/列表推导式/index.html","1d4f267e3b22e07ef08a5bbac238f2e9"],["/tags/助词/index.html","676e6d165707e9a5e9a9b49c26591c2e"],["/tags/包/index.html","325a0079b863d3ebc24a81c47e488624"],["/tags/卷积神经网络/index.html","05a5a4de864def716fae4418294467fe"],["/tags/双系统安装/index.html","b21455d9a466dddc95fdf7c0e9376c0a"],["/tags/反向传播/index.html","3768a4bb975230e09987c8ad54466971"],["/tags/句型/index.html","52ef9c775f3ae096d85082daee5a29e0"],["/tags/可视化/index.html","2a158b849d54c89213f69fd23b37723c"],["/tags/哲学/index.html","cefcc56d2335de51069c07cfe2af331e"],["/tags/图像美化/index.html","6ce4b5bf655ee32e60de56337a729dd5"],["/tags/图床/index.html","5041ea0950533dc1fce8adfdbafe4fb9"],["/tags/多继承/index.html","b66488f22cff87b4d920307699e54fe7"],["/tags/工具/index.html","7ad2ea73a373c3c77a35945cd9eb7f20"],["/tags/异常/index.html","ac57ba0fcd0d9eb04f9a5a196b73f6bc"],["/tags/强化学习/index.html","1c1e17e614d782f741bd1ddb960e9917"],["/tags/心理学/index.html","142cc720c54f355fc71144897dc9db16"],["/tags/感知器/index.html","981e4df91fd6002723fe58c6f299a34b"],["/tags/换源/index.html","3922d4c424ac6c9bc7bc914f0afeb40c"],["/tags/描述器/index.html","1f695ade48ec012825b71b4ead4325ff"],["/tags/敬语/index.html","551b09b2aea937e95d1304833af4f2c3"],["/tags/数据集/index.html","33800a148cf19df24793d5f3f5ada2eb"],["/tags/文件/index.html","44928f61947c6695d11944ddb9536718"],["/tags/服务器配置LDAP/index.html","dfa4077e8d86de6375bda77648629339"],["/tags/机器学习/index.html","56fe2f0551a63fc15559f03341d65051"],["/tags/梯度下降/index.html","f6f84bee237ce04c3160dff1e98fa2f5"],["/tags/模块/index.html","d96dcadccee026f8e9a8f728ab7e1684"],["/tags/正则/index.html","4ad6a7b45091abac2ca274ada54f3548"],["/tags/激活函数/index.html","73edcecc2435393a05f2c281d5c6853a"],["/tags/点击预估/index.html","cba0a6daad19e44361e0357f028bca62"],["/tags/爬虫/index.html","51eca101dda48816cb2223bf88ad2112"],["/tags/生成器/index.html","fd78b07337c40a20882876f13e759386"],["/tags/类/index.html","becb6c0ab75c4488cfaa3e8bab78ba9f"],["/tags/线性回归/index.html","f24b408a5d5eb26fd47ea44fb3af35cb"],["/tags/经济学/index.html","fccb3b4df343b26cb79c6e0ee13763d8"],["/tags/聚类/index.html","62fbb2c8d0eaabad65c7dca8928ded32"],["/tags/装饰器/index.html","339c975363535ce4eb1b8b70e3825402"],["/tags/词型变换/index.html","5802bd53f934e2c7a32ca2015672d578"],["/tags/语义分割/index.html","89aa61e358390271561fb952f1682dcc"],["/tags/语法/index.html","ff5e7b2eb3542cdea7376c0ee3023221"],["/tags/语法/page/2/index.html","edbd34acedf446970b32f038219c345c"],["/tags/迭代器/index.html","21d09cc8b2c21132ac42d8fc34d879c3"],["/tags/逻辑回归/index.html","c8b3d7d20c43dd9809ccb9cfd7d0d83b"],["/tags/随机森林/index.html","667149f7a5ec9f6758bdce1084929463"],["/tags/魔方方法/index.html","3472ad4f81c8016d081ad214ebd0ebd1"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
